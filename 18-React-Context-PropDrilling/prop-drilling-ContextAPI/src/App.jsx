import {useState} from 'react'

function App() {
  const [count , setCount] = useState(0)

  return (
    <div>
    <Count count = {count}/>
    <Buttons count = {count}  setCount = {setCount}/>
    </div>
  )
} 

function Count({count} ) {
  return <div>
     
  </div>
}