import { CreateTodo } from "../components/CreateTodo";
import { Todos } from "../components/Todos";
import { useState , useEffect } from "react";
import axios from "axios";

export default function App() {
  const [todos , setTodos ] = useState([])

  const fetchAllTheTodos = async () => {
    const allTodosData = axios.get("http://localhost:3000/getTodo") 
    .then((response) => {
      if(response.data.status) {
        setTodos(response.data.data)
      }
    })

  }
  useEffect(() => {
    fetchAllTheTodos()
  } , [])
  // const todosData = axios.get("http://localhost:3000/getTodo")
  // //console.log("The todoData API" , todosData)
  // const [todos , setTodos ] = useState([])
  // const todoDeatils = ;
  //console.log("Todos in useState" , todos)
  return (
    <div>
      Hi There! This is coming from App.jsx
      <CreateTodo />
      <Todos todos = {todos} />
    </div>
  );
}
