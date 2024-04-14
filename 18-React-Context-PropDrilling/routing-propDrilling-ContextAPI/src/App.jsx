import {useContext, useState} from 'react'
import { CountContext } from './context'
function App() {
  const [count , setCount] = useState(0)
  //wrap anyone that wants to use the teleported values inside a provider
  return (
    <div>
      <CountContext.Provider value = {count}> 
        <Count count = {count} setCount = {setCount} />
      </CountContext.Provider>

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

function Count({count , setCount}) {
  return <div>
    <CountRenderer count = {count}/>
    <Buttons setCount = {setCount} />
  </div>
}
function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}
//reducer or useReducer

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={()=> {
      setCount(count + 1)
    }}>Increase</button>
    <button onClick={()=> setCount(count- 1)} >Reduce</button>
  </div>
}


export default App