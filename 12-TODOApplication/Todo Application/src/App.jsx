import {useState} from 'react'
/**
 * todo application 
 * todo 
 * {
 *  todos : [{
 *  title : 'todo1',
 *  description : 'todo1 description'
 *  completed : true/false
 *  }]
 * }
 */
function App() {

  const [todos , setTodos] = useState([
  {
    title : 'Go to gym' , 
    description : 'Go to gym from 7-9' , 
    completed : false 
  } ,
  {
    title : 'Study DSA ' , 
    description : 'Study DSA from 10-12' , 
    completed : true
  } ,
  {
    title : 'Study C++ ' , 
    description : 'Study C++ from 10-12' , 
    completed : false
  } , 
  {
    title : 'Study React Js ' , 
    description : 'Study React Js from 10-12' , 
    completed : false
  }
])

function addTodo() {
  setTodos([...todos , {
    title :  "GOA JAO" , 
    description : "GOA ME MAJE HI MAJE" , 
    completed : true 
  }])
}


return (
  <div>
    <button onClick={addTodo}>Add a random todo</button>
    {todos.map((todo)=> {
      return <Todo title = {todo.title} description = {todo.description}/>
    })}
  </div>
)
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}



export default App