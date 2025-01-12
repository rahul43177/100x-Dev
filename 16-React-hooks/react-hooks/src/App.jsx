import {useState , useMemo} from 'react'
import LearningUseCallBack from './hooks/useCallback'

export default function App() {
    const [counter , setCounter ] = useState(0)
    const [inputValue , setInputValue ] = useState(1)

    let count = useMemo(() => {
        let finalCount = 0;
        for(let i = 0;i<=inputValue;i++) {
            finalCount += i;
        }
        return finalCount ;
    }, [inputValue])

    return (
        <div>
            <LearningUseCallBack/>
            <input 
                onChange = {(e) => setInputValue(e.target.value)}
                type="text" 
                placeholder='Please enter the number'
            />
            <br />
            <p>The sum - {count}</p>
            <br />
            <button
                onClick={() => setCounter(counter+1)}
            >
                Click me to update the counter - {counter}
            </button>
        </div>        
    )
}