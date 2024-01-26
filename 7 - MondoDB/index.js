const express = require("express")
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const mongoDBString = 'mongodb+srv://rahul4317:L0Jf8dKS6E1sKl1C@cluster0.dwi1fgs.mongodb.net/user_app'

//here we connected mongoDb using mongoose
mongoose.connect(mongoDBString)

const userSchema = new mongoose.Schema({
    name : String , 
    email : String ,
    password : String 
})

const User = mongoose.model('User' , userSchema)

app.post('/singup' , async (req,res)=> {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    const existingUser = await User.findOne({email : username })
    if(existingUser) {
        return res.status(400).json({
            msg  : "User already exists"
        })
    }

    const user = new User({
       name : name ,
       username : username , 
       password : password
    })

    await user.save();
    res.json({
        msg : "User created successfully"
    })
})


app.listen(3000 , ()=> {
    console.log(`The server is running on port 3000`)
})