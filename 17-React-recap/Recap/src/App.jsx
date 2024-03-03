import { useState } from "react";

function App() {
  const [count , setCount] = useState(0)
  console.log(`The count is ${count}`)
  return (
    <>
      <button onClick={()=> setCount(count+1)}>Count is {count}</button>
      <NavigationComponent count = {count}/>
    </>
  )
}

function NavigationComponent({count}) {
  return (

    <nav>
      <button>
        Click me - {count}
      </button>

    </nav>
        )
}


export default App