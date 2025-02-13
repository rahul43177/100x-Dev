import {useState} from 'react'

export default function App() {
    const [count , setCount] = useState(0);
    return (
        <div
            style = {{
                display : "flex" , 
                flexDirection : "column" ,
                alignItems : "center " , 
                justifyContent : "center"
            }}
        >
            <h4
                style = {{
                    padding : 10 , 
                    margin : 10 , 
                    border : "1px solid black" , 
                    fontFamily : "monospace" , 
                    width : "fit-content" , 
                    fontSize : "23px"
                }}
            >Passing down the state to the <span style = {{color : "red", textDecoration : "underline"}}>Lowest Commaon Ancestor</span></h4>

            <Counter count = {count}/>
            <Buttons count = {count} setCount = {setCount}/>
        </div>
    )
}

function Counter({count}) {
    return (
        <div>
           <h3>The counter is {count}</h3> 
        </div>
    )
}

function Buttons({count , setCount}) {
    return (
        <div>
            <button 
                onClick={() => setCount(count+1)}
                style = {{
                    padding : 10 , 
                    border : "2px solid green" ,
                    borderRadius : "50px" , 
                    margin : 10 , 
                    width : "fit-content" , 
                    fontSize : "16px" , 
                    fontFamily : "cursive"
                }}
            >Increment (+)</button>
            <button 
                onClick={() => setCount(count-1)}
                style = {{
                    padding : 10 , 
                    border : "2px solid red" ,
                    borderRadius : "50px" , 
                    margin : 10 , 
                    width : "fit-content" , 
                    fontSize : "16px" , 
                    fontFamily : "cursive"
                }}
            >Decrement (-)</button>
            <button
                style = {{
                    padding : 10 , 
                    border : "2px solid blue" ,
                    borderRadius : "50px" ,
                    margin : 10 ,
                    width : "fit-content" ,
                    fontSize : "16px" ,
                    fontFamily : "cursive"
                }}
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    )
}
