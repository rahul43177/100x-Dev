import {useState} from 'react'

function App() {
  let todosArray = [
    {
      id : 1 , 
      title : "Go to gym" ,
      description : " Do biceps" 
    } , 
    {
      id : 2 , 
      title : "study DSA" , 
      description : "complete arrays" ,
    } ,
    {
      id : 3 ,
      title : "study React " ,
      description : "study the class"
    }
  ]
  const [todos , setTodos] = useState(todosArray)
  
  function addTodos() {
    setTodos([...todos , {
      id : 4 , 
      title : "random text" ,
      description : Math.floor(Math.random()* 100)
    }])
  }


  return (
    <div>
      <button onClick={addTodos} >Add a todo</button> 
    {todos.map((todo)=> {
      console.log(todo.id)
      return <Todo key={todo.id} title = {todo.title} description={todo.description} />
    })}
    </div>
  )

}


function Todo({title , description}) {
  return <div>

  <h1>
    {title}
  </h1>
  <h5>{description}</h5>
  </div>
}


export default App
