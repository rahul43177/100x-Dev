const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

app.use(express.json());

require("dotenv").config();

const mongoDbURI = process.env.MONGO_DB_STRING;
console.log("The uri --", mongoDbURI);

const connect = async (uri) => {
  console.log("Inside uri", uri);
  mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((e) => {
      console.log("The error is :", e);
    });
};

connect(mongoDbURI);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
