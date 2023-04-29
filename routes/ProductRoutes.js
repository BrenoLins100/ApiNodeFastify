const ProductController = require('../controllers/ProductController');

function productRoutes(fastify, options, done) {

  // Rota para criar um novo produto químico
  fastify.post('/products', ProductController.createProduct);

  // Rota para listar todos os produtos químicos
  fastify.get('/products', ProductController.getProducts);

  // Rota para buscar um produto químico pelo ID
  fastify.get('/products/:id', ProductController.getProduct);

  // Rota para atualizar um produto químico pelo ID
  fastify.put('/products/:id', ProductController.updateProduct);

  // Rota para excluir um produto químico pelo ID
  fastify.delete('/products/:id', ProductController.deleteProduct);

  done();
}

module.exports = productRoutes;
