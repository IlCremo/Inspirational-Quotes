const mongoose = require('mongoose');

const model_schema = new mongoose.Schema({
    _id: Number,
    quote: String,
    author: String
}, { collection: 'Inspirational-Quotes' });

module.exports = mongoose.model('model', model_schema);