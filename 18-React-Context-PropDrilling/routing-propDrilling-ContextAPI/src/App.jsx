import { useState } from "react";
import CountContext from "./context";



export default function App() {
  const [count , setCount] = useState(0)

  return (
    <div>
      
    </div>
  )
}


function Count({count , setCount}) {
  return <div>
    <button>Increase</button>
    <button>Decrease</button>
  </div>
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}

function Buttons({count , setCount}) {
  return <div>``
    <button onClick={() => {
      setCount(count+1)
    }}>
      
    </button>
  </div>
}