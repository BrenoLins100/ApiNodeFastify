const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Conectar ao banco de dados
const dbUrl = process.env.DB_URL
const MONGODB_URI = dbUrl;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully!');
}).catch((error) => {
  console.log('Error connecting to MongoDB: ', error);
});

// Declaração da rota raiz
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});


// Registrar as rotas de produtos
fastify.register(require('./routes/ProductRoutes'), { prefix: '/api' });

//permitindo CORS
fastify.register(cors,{
  origin: '*'
})

// Iniciar o servidor
const start = async () => {

  var port = process.env.PORT || 3000;

  try {
    await fastify.listen(port, '0.0.0.0');
    console.log('Server running at http://0.0.0.0:3000/');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

