import { CreateTodo } from "../components/CreateTodo";
import { Todos } from "../components/Todos";
import { useState , useEffect } from "react";
import axios from "axios";

export default function App() {
  const [todos , setTodos ] = useState([])

  const fetchAllTheTodos = async () => {
    const allTodoResponse = await axios.get("http://localhost:3000/getTodo")
    const allTodoData = allTodoResponse.data
    if(allTodoData.status) {
      setTodos(allTodoData.data)
    }
  }
  
  useEffect(() => {
     fetchAllTheTodos()
  } , [])
  // const todosData = axios.get("http://localhost:3000/getTodo")
  // ////console.log("The todoData API" , todosData)
  // const [todos , setTodos ] = useState([])
  // const todoDeatils = ;
  ////console.log("Todos in useState" , todos)
  return (
    <div>
      Hi There! This is coming from App.jsx
      <CreateTodo todo = {todos}/>
      <Todos todos = {todos} />
    </div>
  );
}

