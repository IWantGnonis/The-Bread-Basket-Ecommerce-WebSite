// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    image:String,
});

module.exports = mongoose.model('desserts', productSchema);