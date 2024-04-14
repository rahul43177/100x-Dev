const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/sum' , async function(req,res) {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    
    let sum = num1+num2
    res.send(sum.toString())
    
})

app.listen(3000 , ()=> {
    console.log('server is running on port 3000')
})