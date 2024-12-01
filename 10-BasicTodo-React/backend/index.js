const express = require("express")
const router = require("./routes")
const app = express()
const cors = require("cors")


app.use(cors())
app.use(express.json())


app.use("/" , router)


app.listen(3000 , () => {
  console.log("The server is running on PORT --:3000")
})