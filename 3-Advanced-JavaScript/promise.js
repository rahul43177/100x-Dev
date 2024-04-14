// const fs = require("fs")
// const path = require("path")

// const filePath = path.join(__dirname , '../3 - Advanced JavaScript/fs_module.txt')
// function rahulReadFile() {
//     return  new Promise(function (resolve) {
//         fs.readFile(filePath , 'utf-8' , function(err , data) {
//             resolve(data);
//         })
//     })
// }

// function onDone(data) {
//     console.log(data);
// }

// rahulReadFile().then(onDone);


let d = new Promise(function(resolve) {
    resolve("foo")
})

function callbacks() {
    console.log(d);
}

d.then(callbacks)

 
