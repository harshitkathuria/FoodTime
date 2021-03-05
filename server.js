const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/authRoute");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);

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
