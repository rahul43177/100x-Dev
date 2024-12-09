// getAllTodos
// createTodo
// completeTodos

const { todoModel } = require("./db")
const { updateTodoValidation , createTodoValidation } = require("./types")


const getAllTodos = async (req,res) => {
    const allTodoData  = await todoModel.find()

    return res.status(200).json({
        status : true , 
        data : allTodoData
    })
}


const createTodo = async (req,res) => {
    const payload = req.body
    console.log("The payload is" , payload)
    const parsedPayload = createTodoValidation.safeParse(payload)
    console.log("The parsedpayload data is" , parsedPayload.data)
    if(!parsedPayload.success) {
        return res.status(411).json({
            status : false ,
            message : "you sent the wrong input!!"
        })
    }
    
     const todoData = parsedPayload.data

     const createTodoDatabase = await todoModel.create(parsedPayload.data)
    
     
     return res.status(201).json({
        status : true , 
        message : "Todo have been created!!" , 
        data : createTodoDatabase
     })
}

const updateTodo = async (req,res)=> {
    const payload = req.params
    const {title , description} = req.body

    console.log("The payload is " , payload)

    const parsedPayload = updateTodoValidation.safeParse(payload)

    if(!parsedPayload.success) {
        return res.status(411).json({
            status : false  , 
            message : "you sent the wrong input!!"
        })
    }

    const {id} = parsedPayload.data
    
    const updateTodoDatabase = await todoModel.findByIdAndUpdate(
        id , 
        {
            title : title , 
            description : description
       } ,
       {new : true}
    )

    return res.status(200).json({
        status : true , 
        message : "Todo have been updated !!" ,
        data : updateTodoDatabase
    })
}
const markAsCompleted = async (req,res) => {
    const {id , isCompleted} = req.body

    const markAsCompletedEdit = await todoModel.findByIdAndUpdate(
        id , 
        {
            isCompleted : !isCompleted
        } , 
        {new : true}
    )
    const uncompleted = "Uncompleted"
    const completed = "Completed"
    return res.status(200).json({
        status : true , 
        message : `Todo have been marked as ${isCompleted ? uncompleted : completed}`
    })

}

module.exports = {
    getAllTodos , 
    createTodo ,  
    updateTodo ,
    markAsCompleted
}