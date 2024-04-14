const express = require('express')
const zod = require('zod')
const app = express()



let schema = zod.object({
    email : zod.string().email() , 
    password : zod.string().min(8)
})

app.use(express.json())

app.post('/emailCheck' , function(req,res){

    const {email , password} = req.body
    const result = schema.parse({email , password})

    res.json({
        msg : "success" , 
        data : result
    })
    
})

app.listen(3000, ()=> {
    console.log(`the server is running on the port 3000`)
})