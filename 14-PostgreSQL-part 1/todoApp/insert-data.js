const db = require("./util");

async function createEnteries() {
  await db.connect();

  const insertUserText = `
    INSERT INTO users(email , password)
    VALUES($1 , $2)
    RETURNING email
    `;

  const userValue = ["asdasd@gmail.com", "12345678"];

  let response = await client.query(insertUserText, userValue);

  const insertTodoText = `
    INSERT INTO todos(title , description , user_id , done)
    VALUES($1 , $2 , $3 , $4)
    `;
  const todoValues = [
    "Buy Groceries",
    "Milk , bread and eggs",
    response.rows[0].id,
    false,
  ];

  const todoResponse = await client.query(insertTodoText, todoValues);

  console.log("Enteries created");
}

createEnteries();
o;
