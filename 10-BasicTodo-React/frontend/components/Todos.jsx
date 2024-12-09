import axios from 'axios'


const handleEdit = async (id) => {
    console.log("The is is _id ===" , id )
    ///updateTodo/:id
    const editTodo = await axios.put(`http://localhost:3000/updateTodo/${id}` , {
        title : "updatedTitle" , 
        description : "updatedDescription"
    })
    console.log("The editTodo response is --", editTodo)
    if(editTodo.data.status) {
        alert("Todo updated successfully!")
    }
}
const handMarkAsCompleted = async (id , isCompleted ) => {
    const markAsCompleted = await axios.put(`http://localhost:3000/mark` , {
        id : id   ,
        isCompleted : isCompleted
    })
    console.log("The markAsCompleted response is --", markAsCompleted)
    if(markAsCompleted.data.status) {
        alert(markAsCompleted.data.message)
    }
    window.location.reload()
    return ; 
}
export const Todos = ({todos}) => {
    console.log("Todo values --",todos)
    return (
        <>
            {todos.map((singleTodo) => {
                return (
                    <div key= {singleTodo._id}>
                        {singleTodo.isCompleted ? (
                            <div style={{
                                textDecoration : "line-through" ,
                                color : "green" , 
                                border : "1px solid green" , 
                                padding : 10 , 
                                margin : 10 , 
                                width : "130px"
                            }}>
                                <h2>{singleTodo.title}</h2>
                                <h4>{singleTodo.description}</h4>
                            </div>
                        ) : (
                            <div
                                style = {{
                                    padding : 10 , 
                                    margin : 10 , 
                                    width : "130px" ,
                                    color : "red" , 
                                    border : "1px solid red"
                                }}
                            >
                                <h2>{singleTodo.title}</h2>
                                <h4>{singleTodo.description}</h4>
                            </div>
                        )}
                        <button
                            onClick = {() => handMarkAsCompleted(singleTodo._id , singleTodo.isCompleted)}
                            style = {{
                                padding : 10 , 
                                margin : 10 , 
                                width : "fit-content"
                            }}
                        >
                        {singleTodo.isCompleted ? "Mark as uncomplted!!" : "Mark as completed!!"}

                        </button>
                        
                        
                    </div>
                )
            })}
        </>
    )
}