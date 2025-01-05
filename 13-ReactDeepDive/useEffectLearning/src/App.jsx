import {useState} from 'react'

export default function App() {
    const [counter, setCounter] = useState(0);
    function updateCounter() {
        setCounter(counter+1);
        
    }
    return (
        <>
            <div>
                <button
                    onClick={updateCounter}
                >
                    Counter : {counter}
                </button>
            </div>
        </>
    )
}