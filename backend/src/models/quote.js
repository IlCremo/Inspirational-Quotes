const mongoose = require('mongoose');

const model_schema = new mongoose.Schema({
    _id: Number,
    quote: String,
    author: String
}, {collection: 'quotes'});

module.exports = mongoose.model('quote', model_schema);