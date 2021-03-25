const express = require('express');
require('../src/db/conn');
const MensRanking = require("../src/models/mens")
const router = require("./routers/CrudOperation");

const app = express();

const Port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(Port , () => {
     console.log(`Connection is established at http://localhost:${Port}`);
})