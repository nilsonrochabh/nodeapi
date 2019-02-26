const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const cors = require("cors");

//inciando o App
const app = express();
app.use(express.json());
app.user(cors());
//iniciando o bd
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    {useNewUrlParser:true}
);
requireDir("./src/models");
const Product = mongoose.model("Product");

//rotas
app.use('/api',require('./src/routes'));

//porta de escuta
app.listen(3002);
