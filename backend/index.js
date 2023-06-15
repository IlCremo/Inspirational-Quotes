require('dotenv').config();
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

app.get('/api', (req, res) => {
    let r = Math.floor(Math.random() * quotes.length);
    let quote = quotes[r];
    res.json(quote);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
