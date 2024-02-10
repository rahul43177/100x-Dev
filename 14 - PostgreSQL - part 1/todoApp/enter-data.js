const {getClient} = require('./util.js')


async function enterData () {
  const db = await getClient()
  const usersDataQuery = `
  INSERT INTO users(email , password)
  VALUES  ($1 , $2)
  returning *
`

  const userData = ['rahulmishra@gmail.com' , '123456789']

  let response = await db.query(usersDataQuery , userData)

  console.log(response)

  const todoDataQuery = `
  INSERT INTO todos(title , description , user_id , done)
  VALUES  ($1 , $2 , $3 ,$4)
  RETURTING *
  `
  const todoData = ['Buy Groceries' , 'Milk , bread and eggs' , response.rows[0].id , false]

  const todoResponse = await db.query(todoDataQuery , todoData)

  console.log(todoResponse)
  console.log('insertion done completed')
}


enterData();
