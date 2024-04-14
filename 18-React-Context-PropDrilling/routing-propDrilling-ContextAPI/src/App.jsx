import {useState} from 'react'

function App() {
  const [count , setCount] = useState(0)

  return (
    <div>
      <Count count = {count}/>
      <Buttons count = {count} setCount = {setCount}/>
    </div>
  )
}
function Count() {
  return <div>
    {count}
  </div>
}

function Buttons() {
  return <div>
    <button onClick={()=> {

    }} >
      Increase
    </button>
    <button onClick = {()=> {

    }}>
      Decrease
    </button>
  </div>
} 


export default App