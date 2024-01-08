const express = require('express')
const port = 3000

const app = express()
app.get('/' , (req,res)=> {
    res.send('Hello world');
})

app.use(express.json());

const DB = {}
console.log(DB)
app.post("/register" , (req,res)=>{
    const {name , password} = req.body
    res.setHeader('token' , '123321');
    //store in the DB object
    DB[name] = password
    console.log(DB); 
    return res.status(200).json({message : "register successful"})
})

app.post('/login' , (req,res)=> {
    const {name , password} = req.body
    let token = req.headers['token']
    console.log(name , password , token)
    console.log(token == '123321')
    console.log(DB[name] == password)
    console.log(DB[name])
    console.log(password)
    if(DB[name] == password && token == '123321') {
        return res.status(200).json({message : "login successful" , token})
    }
    return res.status(401).json({message : "login failed"})
})

app.listen(port , ()=> {
    console.log(`The server is running on port ${port}`);
})