const express = require("express")
const router = express.Router()
const {getAllTodos , createTodo , updateTodo,markAsCompleted} = require("./controller")

router.get("/getTodo" , getAllTodos)
router.post("/createTodo" , createTodo)
router.put("/updateTodo/:id" , updateTodo)
router.put("/mark" , markAsCompleted)

module.exports = router;
