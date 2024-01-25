require("dotenv").config();
const router = require('./routes/index');
const express = require('express');
const connectDB = require("./db/db")
const mongoose = require("mongoose")

const app = express();

app.set('view engine', 'ejs');


app.use('/', router);
app.use(express.static("./public"));
app.use(express.json());

connectDB().then(() => {
  app.listen(process.env.PORT | 5000, () => {
    console.log(`server is running in ${process.env.PORT}`);
  })
})

module.exports = app;