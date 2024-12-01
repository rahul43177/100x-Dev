import { CreateTodo } from "../components/CreateTodo";
import { Todos } from "../components/Todos";
import {useState} from 'react'
import axios from 'axios'


export default function App() {
    const todosData = axios.get("http://localhost:3000/getTodo")
    console.log("The todoData API" , todosData)
    const [todos , setTodos ] = useState([])    
    return (
        <div>
            Hi There! This is coming from App.jsx 
            <CreateTodo/>
            <Todos 
            />
        </div>
    )
}