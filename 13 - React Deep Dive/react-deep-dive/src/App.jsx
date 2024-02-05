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
      title : Math.random() , 
      description : Math.random()
    }])
  }


  return (
    <div>
      <button onClick={addTodos} >Add a todo</button> 
    {todos.map((todo)=> {
      return <Todo title = {todo.title} description={todo.description} />
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