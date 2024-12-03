const express = require("express")
const router = express.Router()
const {getAllTodos , createTodo , updateTodo} = require("./controller")

router.get("/getTodo" , getAllTodos)
router.post("/createTodo" , createTodo )
router.put("/updateTodo/:id" , updateTodo)


module.exports = router;
