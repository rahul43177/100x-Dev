import {useState , useEffect} from 'react'
import axios from 'axios'

function App() {
  return <div>
    <Todo/>
  </div>
}


function Todo() {
  const [todo , setTodo] = useState({})

  useEffect(()=> {
    axios.get(`https://sum-server.100xdevs.com/todos`)
    .then((response)=> {
      setTodo(response.data.todos)
    })
  },[])
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>
}




export default App