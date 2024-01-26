const express = require("express")
const app = express()
const jwt = require('jsonwebtoken')
let jwtPassword = '123321'

app.use(express.json())

const ALL_USERS = [
    {
        username: "rahulmishra@gmail.com",
        password: "123456",
        name: "Rahul Mishra"
    },
    {
        username: "john.doe@example.com",
        password: "password123",
        name: "John Doe"
    },
    {
        username: "alice.smith@gmail.com",
        password: "letmein567",
        name: "Alice Smith"
    },
    {
        username: "bob_jones@yahoo.com",
        password: "securepass",
        name: "Bob Jones"
    },
    {
        username: "emma.white@hotmail.com",
        password: "p@ssw0rd",
        name: "Emma White"
    },
    {
        username: "susan.miller@gmail.com",
        password: "susie123",
        name: "Susan Miller"
    },
    {
        username: "michael.brown@yahoo.com",
        password: "brownie789",
        name: "Michael Brown"
    },
    {
        username: "lisa.jackson@hotmail.com",
        password: "lisapass",
        name: "Lisa Jackson"
    },
    {
        username: "david.green@gmail.com",
        password: "green2022",
        name: "David Green"
    }
];

function userExist(username , password) {
    for(let i = 0;i<ALL_USERS.length;i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            return true;
        }
    }
    return false;
}

app.post('/signin' , (req,res)=> {
    const {username , password} = req.body
    if(!userExist(username , password)) {
        return res.status(403).json({
            status : false , 
            message : "user does not exist in our DB"
        })
    }

    let token = jwt.sign({username : username } , jwtPassword)
    return res.json({
        token
    })
})
//here we are sending all the users data other than this username 
app.get('/users' , (req,res)=> {
    const token = req.headers.authorization
    const decoded = jwt.verify(token , jwtPassword)
    const username = decoded.username
    res.json({
        users : ALL_USERS.filter((value)=> {
            if(value.username === username) {
                return false;
            } else {
                return true;
            }
        })
    })
})




app.listen(3000 , ()=> {
    console.log("the server is running on the port 3000")
})