import { CreateTodo } from "../components/CreateTodo";
import { Todos } from "../components/Todos";
import { useState } from "react";
import axios from "axios";

export default function App() {
  // const todosData = axios.get("http://localhost:3000/getTodo")
  // console.log("The todoData API" , todosData)
  // const [todos , setTodos ] = useState([])
  const todoDeatils = [
    {
      id : 1  ,
      title: "First todo",
      description: "This is the description of first todo",
      isCompleted: true,
    },
    {
      id : 2 , 
      title: "Second Todo",
      description: "This desc of second todo",
      isCompleted: false,
    },
    {
      id : 3 , 
      title: "Third Todo",
      description: "This desc of third todo",
      isCompleted: false,
    },
    {
      id : 4 , 
      title: "Fourth Todo",
      description: "This desc of fourth todo",
      isCompleted: false,
    },
  ];
  return (
    <div>
      Hi There! This is coming from App.jsx
      <CreateTodo />
      <Todos todos={todoDeatils} />
    </div>
  );
}
