const express = require("express")
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT , () => {
    console.log(`The server is running on port ${PORT}`)
})

