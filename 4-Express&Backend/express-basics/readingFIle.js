const express = require('express')
const fs = require('fs')

const app = express()

app.get("/" , (req,res)=>{
    fs.readFile('./sample.txt' , 'utf-8' ,(error , data) =>{
        if(!error) {
            res.json({data})
        }
    }) 
})

app.listen(3000)