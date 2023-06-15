require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const quotesDB = require('./models/quote');

const app = express();
const port = process.env.PORT || 3000;

var quotes = [];

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {dbName: 'Inspirational-Quotes'});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

app.use(cors({
    origin: '*'
}));

app.get('/quote', (req, res) => {
    let r = Math.floor(Math.random() * quotes.length);
    let quote = quotes[r];
    res.json(quote);
})

connectDB().then(async () => {
    quotes = await quotesDB.find();
    console.log(quotes);

    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})

