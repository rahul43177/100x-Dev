import React from 'react'
import {countAtom } from './store/atoms/count'
import {RecoilRoot , useRecoilState , useRecoilValue} from 'recoil'


/**
 * @function App
 * @description The root component of the Recoil app.
 * RecoilRoot is the top level component for any Recoil application.
 * All Recoil state is contained underneath a RecoilRoot.
 * RecoilRoot takes care of setting up the context for useRecoilState and
 * useRecoilValue hooks.
 */
function App() {
  return (
    <div>
      <RecoilRoot /* The root component for any Recoil application. */>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom) //useRecoilValue gets the current value of the count atom from the Recoil state managed by the countAtom selector.

  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom)
  const isEven = count %  2 === 0; //check if count is even or odd by using modulo operator (%)
  return <div>
    {/* if count is even then display "Even" otherwise display "Odd" */}
    {isEven ? "Even " : "Odd"}
  </div>
}




function Buttons(){
  //useRecoilState hook is used to get the current value of a Recoil state and also to update it
  //it returns an array with 2 elements - [stateValue, stateUpdaterFunction]
  //stateValue - current value of the Recoil state
  //stateUpdaterFunction - function to update the Recoil state
  const [count ,setCount] = useRecoilState(countAtom) // <--- useRecoilState() hook

  //NOTE: useRecoilState is a combination of useRecoilValue and useSetRecoilState
  //useRecoilValue is a hook to get the current value of a Recoil state
  //useSetRecoilState is a hook to update the Recoil state
  //useRecoilState is more convenient than using both useRecoilValue and useSetRecoilState

  
  
  return <div>
     <button onClick = {()=> {
      setCount(count - 1)
    }}>
      Decrease (-)
    </button> 

    <button onClick= {()=> {
      setCount(count+1)
    }}>
      Increate (+)
    </button>
   
  </div>
}

export default App
