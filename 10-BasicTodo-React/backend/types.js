const zod = require("zod")


const createTodoValidation = zod.object({
    "title" : zod.string() ,
    "description" : zod.string() 
})


const updateTodoValidation = zod.object({
    id : zod.string()
})


module.exports = {
    createTodoValidation , 
    updateTodoValidation
}