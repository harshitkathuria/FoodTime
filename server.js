const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const restaurantRoute = require("./routes/restaurantRoute");
const orderRoute = require("./routes/orderRoute");

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/res", restaurantRoute);
app.use("/api/order", orderRoute);

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});
