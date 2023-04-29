const Product = require('../models/Product');

exports.createProduct = async (request, reply) => {
  try {
    const product = new Product(request.body);
    await product.save();
    reply.code(201).send(product);
  } catch (err) {
    reply.code(500).send(err);
  }
};

exports.getProducts = async (request, reply) => {
  try {
    const products = await Product.find();
    reply.send(products);
  } catch (err) {
    reply.code(500).send(err);
  }
};

exports.getProduct = async (request, reply) => {
  try {
    const product = await Product.findById(request.params.id);
    if (!product) {
      reply.code(404).send();
    } else {
      reply.send(product);
    }
  } catch (err) {
    reply.code(500).send(err);
  }
};

exports.updateProduct = async (request, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (!product) {
      reply.code(404).send();
    } else {
      reply.send(product);
    }
  } catch (err) {
    reply.code(500).send(err);
  }
};

exports.deleteProduct = async (request, reply) => {
  try {
    const product = await Product.findByIdAndDelete(request.params.id);
    if (!product) {
      reply.code(404).send();
    } else {
      reply.send(product);
    }
  } catch (err) {
    reply.code(500).send(err);
  }
};
