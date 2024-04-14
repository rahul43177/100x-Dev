const db = require("./util");

const insertUserData = async (req, res) => {
  try {
    await db
      .connect()
      .then(() => {
        console.log("postgreSQL is connected");
      })
      .catch((error) => {
        console.log({ error: error.message });
      });

    const { email, password } = req.body;

    const query = `
    INSERT INTO users (email , password) 
    VALUES  ($1 , $2)
    RETURNING *
    `;

    const values = [email, password];
    const insert = await db.query(query, values);
    db.release();
    return res.status(200).json({
      status: true,
      message: "INSERT successfull",
      data: insert.rows,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
const insertTodoData = async (req, res) => {
    try {
        let connect = await db.connect()

        const {title , description , done} = req.body
        
        const user_id = db.query(`select id from users where email = `)
    } catch(error) {
        res.status(500).json({
            status : false ,
            error : error.message
        })
    }
};

module.exports = { insertUserData  , insertTodoData};
