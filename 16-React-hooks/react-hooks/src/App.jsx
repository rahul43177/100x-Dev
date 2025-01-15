import {useState , useEffect} from 'react'
import axios from 'axios'



function useTodos() {
    const [todos , setTodos] = useState([])
    
    useEffect(() => {
        axios.get("https://dummyjson.com/todos")
        .then((response)=> {
            console.log("Response" , response.data.todos)
            setTodos(response.data.todos)
        })
    }, [])
}


export default function  App() {
    // const todos =  useTodos();
    console.log("Todos in App" , todos)
    return (
       {todos}
    )
}


