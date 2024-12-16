import {useState} from 'react'

export default function App() {
    const [count , setCount] = useState(0);
    return (
        <>
            <input type="text" placeholder = "enter a number"/>
            <p>Sum is : {}</p>
            <button>Counter ({count})</button>
        </>
    )
    
}