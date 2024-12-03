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

export const Todos = ({todos}) => {
    console.log("Todo values --",todos)
    return (
        <>
            {todos.map((singleTodo) => {
                return (
                    <div key= {singleTodo._id}>
                        <h2>{singleTodo.title}</h2>
                        <h4>{singleTodo.description}</h4>
                        <button>{singleTodo.isCompleted ? "Mark as uncompleted!!" : "Mark as completed!!"}</button>
                        <button
                        onClick = {() => handleEdit(singleTodo._id)}
                        >Edit</button>
                    </div>
                )
            })}
        </>
    )
}