const {Client} = require('pg')

const client = new Client({
  user : "postgres" ,
  password : "123456789" , 
  databse : "todos" ,
  host : "localhost" ,
  port: 5432
})


client.connect() 
.then(()=> {
    console.log('PostgreSQL is connected')
  })
.catch((error)=> console.log('error' , error.message))

module.exports

