import {useState , useEffect} from 'react'

function App() {
  
  const [todos , setTodos ] = useState([])

  useEffect(()=> {
    setInterval(()=> {
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async(res)=>{
        const json = await res.json()
        setTodos(json.todos)
      })
    }, 1*1000)
  } ,[])

  return (
    <div>
      {todos.map((todo)=>{
        return <TodoComponent key={todo.id} title={todo.title} description={todo.description} />
      })}
    </div>
  )

}

function TodoComponent({title , description}) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}

export default App