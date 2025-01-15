import {memo , useCallback , useState} from 'react'

export default function App() {
    const [count , setCount] = useState(0)
    
    const inputFunction = useCallback(() => {
        console.log("Hi There!")
    })
        return (
        <div>
            <ButtonComponent inputFunction = {inputFunction}/>
            <button 
                onClick={() => setCount(count+1)}
            >Click me {count}</button>
        </div>
    )
}

const ButtonComponent = memo((inputFunction) => {
    console.log("Child render!")

    return <div>
        <button>Button Clicked</button>
    </div>
})