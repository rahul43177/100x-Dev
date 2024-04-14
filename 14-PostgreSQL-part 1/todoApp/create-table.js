const {getClient} = require('./util')

async function createTable() {
    const client = await getClient()
    const createUserTableQuery = `
        CREATE TABLE users(
            id serial primary key , 
            email varchar(250) unique not null , 
            password varchar(250) not null
        )`
        
        await client.query(createUserTableQuery)

    const createTodoQuery = `
        CREATE TABLE todos(
            id serial primary key ,
            title text not null , 
            description text ,
            user_id integer references users(id) ,
            done boolean default false
        )
    `
    await client.query(createTodoQuery)

    console.log("Table created successfully")
}

createTable()