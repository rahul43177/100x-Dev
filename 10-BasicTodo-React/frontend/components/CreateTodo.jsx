import {useState} from 'react'
import axios from 'axios'

export function CreateTodo({todos, onTodoUpdate}) {
    const [title, setTitle] = useState("") 
    const [description, setDescription] = useState("")
    const [editingTodo, setEditingTodo] = useState(null)

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            if (editingTodo) {
                // Update existing todo
                const response = await axios.put(`http://localhost:3000/updateTodo/${editingTodo._id}`, {
                    title,
                    description
                });
                setEditingTodo(null);
                if (onTodoUpdate) onTodoUpdate();
            } else {
                // Create new todo
                await axios.post("http://localhost:3000/createTodo", {
                    title,
                    description
                });
            }
            setTitle("");
            setDescription("");
            alert(editingTodo ? "Todo updated successfully" : "Todo added successfully");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to " + (editingTodo ? "update" : "create") + " todo");
        }
    }

    const startEditing = (todo) => {
        setEditingTodo(todo);
        setTitle(todo.title);
        setDescription(todo.description);
    }
    
    return (
        <div>
            <input 
                style={{
                    padding: 10,
                    margin: 10 
                }}
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
            />
            <br /> 
            <input 
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
            />
            <br /> 
            <button 
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={handleSubmit}
            >
                {editingTodo ? "Update Todo" : "Add Todo"}
            </button>
            {editingTodo && (
                <button
                    style={{
                        padding: 10,
                        margin: 10
                    }}
                    onClick={() => {
                        setEditingTodo(null);
                        setTitle("");
                        setDescription("");
                    }}
                >
                    Cancel Edit
                </button>
            )}
        </div>
    )
}