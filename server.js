const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB = process.env.DB.replace("<PASSWORD>", DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to DB"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});
