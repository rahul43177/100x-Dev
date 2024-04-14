const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

const value = {
    name : "Rahul Mishra" , 
    accountNumber : 123123
}

const token = jwt.sign(value , "secretToken")

console.log(`JWT Token --> 
${token}
`)
