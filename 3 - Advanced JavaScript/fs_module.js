//fs module
const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../3 - Advanced JavaScript/fs_module.txt"
);
/*
here we have given three fields below in the readFile = filePath , utf-8 , (err , data)=>
*/
fs.readFile(filePath, "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
    return;
  } else {
    console.log(err);
    return;
  }
});
