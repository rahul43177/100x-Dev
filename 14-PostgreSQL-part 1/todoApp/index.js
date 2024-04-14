const express = require("express");
const app = express();
const route = require("./route");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", route);

app.listen(3000, () => {
  console.log("The server is running on the port 3000");
});
