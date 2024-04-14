const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/findInterest' , (req,res)=> {
    const principal = req.query.principal
    const rate = req.query.rate 
    const time = req.query.time

    let interest = (principal*rate*time)/100
    res.send(interest.toString())
})

app.listen(3000 , ()=> {
    console.log("The server is running on the port 3000")
})