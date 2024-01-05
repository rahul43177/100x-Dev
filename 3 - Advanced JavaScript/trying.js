const fs = require('fs')
const path = require("path")

const filePath = path.join(__dirname , '../3 - Advanced JavaScript/fs_module.txt');
let result ;
fs.readFile(filePath , 'utf-8' , (err , data)=> {
    if(!err) {
        console.log(data);
        result = data;
        if(result.length > 0) {
            console.log("Data agaya hai");
            result.trim();
            result.toLowerCase();

            fs.writeFile(filePath , result , (err)=>{
                if(!err) {
                    console.log("File updated successfully");
                }
            })
            
        } 
        return;
    }
    else {
        throw new Error({error : err.message})
    }
})

console.log(`result --> ${result}`)

