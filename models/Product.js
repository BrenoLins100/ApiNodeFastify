const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  chemicalFormula: {
    type: String,
    required: true
  },
  composition: {
    type: String,
    required: true
  },
  lotNumber: {
    type: String,
    required: true
  },
  manufactureDate: {
    type: Date,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  supplier: {
    type: String,
    required: true
  },
  imagePath:{
    type: String,
    required: true
  },
  updateAt:{
    type: Date,
    default: Date.now()
  }
},{ versionKey: false });

module.exports = mongoose.model('Product', productSchema);
