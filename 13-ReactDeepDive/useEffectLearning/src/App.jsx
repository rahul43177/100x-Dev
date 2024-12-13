// https://dummy-json.mock.beeceptor.com/todos
import axios from 'axios'
import {useEffect , useState} from 'react'


export default function App() {
  const [todos , setTodos] = useState([])
  //fetch the todos from the url above
  
  const fetchTodos = async () => {
    try { 
      const response = await axios.get("https://dummy-json.mock.beeceptor.com/todos")
      setTodos(response.data)
    } catch(e) {
      console.log("error" , e)
    }
  }
 

  useEffect(() => {
    setInterval(() => {
      fetchTodos()
    }, 2000)
  } ,[])
 // console.log("Todo outside" , todos)

  return (
    <>
      <Todos todos = {todos}/>
    </>
  )
}


const Todos = ({todos}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key = {todo.id}>
            <h1>
              {todo.title}
            </h1> 
            <button>{todo.copleted ? "DONE" :"NOT DONE"}</button>
          </div>
        )
      })}

    </div>
  )
}