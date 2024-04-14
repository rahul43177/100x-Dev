const express = require('express')
const router = express.Router()
const {insertUserData, insertTodosData } = require("./controller")

router.post('/insertUserData', insertUserData)
router.post('/insertTodoData', insertTodosData)

module.exports = router