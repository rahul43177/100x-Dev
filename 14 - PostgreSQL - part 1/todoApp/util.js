const {Client} = require("pg")

const client = new Client({
  user : "postgres" , 
  password : "123456789" ,
  host : "localhost" , 
  port : 5432 , 
  databse : "todos"
})


module.exports.db = client;