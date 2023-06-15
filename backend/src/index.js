require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const model = require('model');

const app = express();
const port = process.env.PORT || 3000;

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

app.use(cors({
    origin: '*'
}));

app.get('/api', (req, res) => {
    let r = Math.floor(Math.random() * quotes.length);
    let quote = quotes[r];
    res.json(quote);
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
