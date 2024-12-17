import {useState} from 'react'

export default function App() {
    const [count , setCount] = useState(0);
    const [text , setText] = useState(0)
    const [sum , setSum] = useState(0);
    const findSum = () => {
        const array = text.split(",")
        const sumSum = array.reduce((acc , curr) => {
            return (Number(acc) + Number(curr))
        })
        setSum(sumSum);
    }
    return (
        <>
            <input 
                type = "text" 
                placeholder = "Enter the numbers with comma" 
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                onClick = {findSum}
            /> 
            <p>Sum is : {sum}</p>
            <button
                onClick = {() => setCount(count+1)}
            >Counter ({count})</button>

        </>
    )
    
}