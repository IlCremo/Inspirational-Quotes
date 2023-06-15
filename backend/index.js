const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;

const rawdata = fs.readFileSync('https://github.com/IlCremo/Inspirational-Quotes/blob/main/backend/data/data.json');
const quotes = JSON.parse(rawdata);

app.use(cors({
    origin: '*'
}));

app.get('/api', (req, res) => {
    let r = Math.floor(Math.random() * quotes.length);
    let quote = quotes[r];
    res.json(quote);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
