require("dotenv").config();
const mongoose = require("mongoose");
const mongoDBURI = process.env.MONGO_DB_STRING
console.log("MongoDB URI is : " , mongoDBURI);
mongoose.connect(mongoDBURI)
.then(() => {
    console.log("MongoDB Is connected")
})
.catch((err) => {
    console.log("MongoDB Is not connected" , err)
})

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  isCompleted: {
    type: Boolean,
    deafult: false,
  },
});

module.exports.todo = mongoose.model("todo", TodoSchema);
