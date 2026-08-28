const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0.0,
    },
    image: {
      type: String,
      required: [true, 'Please provide product image URL'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
    },
    stock: {
      type: Number,
      required: [true, 'Please provide product stock'],
      default: 0,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
