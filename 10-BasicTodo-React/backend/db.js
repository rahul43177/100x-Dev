require("dotenv").config();
const mongoose = require("mongoose");

const mongoDbString = process.env.MONGO_STRING;

mongoose
  .connect(mongoDbString)
  .then(() => {
    console.log("The mongoDb is connected");
  })
  .catch((e) => {
    console.log("Mongo connection error:", e);
  });

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true , "Title is required"],
  },
  description: {
    type: String,
    required: [true , "Description is required"],
  },
  isCompleted: {
    type: Boolean,
    default : false,
  },
});

module.exports.todoModel = mongoose.model("todo", todoSchema);
