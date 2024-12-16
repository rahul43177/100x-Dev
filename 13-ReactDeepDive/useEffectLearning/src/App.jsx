//https://jsonplaceholder.typicode.com/todos

import {useState,useEffect} from 'react'
import axios from 'axios'
export default function App() {
  const [selectedId , setSelectedId] = useState(1);
  return (
    <>
    <div>
      <button
        onClick = {()=> setSelectedId(1)}
      >1</button>
      <button
        onClick={() => setSelectedId(2)}
      >2</button>
      <button
        onClick={() => setSelectedId(3)}
      >3</button>
      <button
        onClick={() => setSelectedId(4)}
      >4</button>
    </div>
      <TodoComponent id = {selectedId}/>
    </>
  )
}

const TodoComponent = ({id}) => {
  console.log("The id is ->",id)
  const [todo , setTodo] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      console.log("response" , response.data)
      setTodo(response.data)
    })
  },[id])
  return (    
    <div>
      <p>The id - {id}</p>
      <h4> {todo.title} </h4>
      <h6
        style = {{
          color : todo.completed ? "green" : "red"
        }}
      > {todo.completed ? "Ye kaam done hai" : "Ye kaam done nahi hai"} </h6>
    </div>
  )
}
