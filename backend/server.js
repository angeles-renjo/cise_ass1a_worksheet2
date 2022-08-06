const express = require("express");
const articles = require("./dummydata/articles")
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();

server.get('/api/articles', (req,res) => {
    res.json(articles);
});

server.get('/', (req,res) => {
    res.send("API is running")
})

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));

