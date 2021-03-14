const path = require("path");
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

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/res", restaurantRoute);
app.use("/api/order", orderRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});
