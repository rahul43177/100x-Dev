//https://dummy-json.mock.beeceptor.com/todos

import {useState , useEffect} from 'react'
import axios from 'axios'

export default function App() {

    const [todos , setTodos ] = useState([]);

    useEffect(() => {
        axios.get("https://dummy-json.mock.beeceptor.com/todos")
        .then((response) => {
            console.log(response.data);
            setTodos(response.data);
        })
    },[])

    return (
        <>
            <div> 
                <Heading/>
                {todos.map((todo) => {
                    return <Todos title = {todo.title} description ={todo.description} />
                })}
            </div>
        </>
    )
}


const Todos = ({title , completed}) => {
    return (
        <>
            <div
                style = {{
                    fontSize : "18" , 
                    fontFamily : "JetBrains Mono" , 
                    color : completed ? "yellow" : "orange" , 
                    padding : 10 , 
                    margin : 10 , 
                    width : "fit-content" , 
                    border : "2px solid black" , 
                    borderRadius : "50px"
                }}
            >{title}</div>
            <div
                style = {{
                    color : completed ? "green" : "red" , 
                    padding : 10 , 
                    margin : 10 , 
                    fontFamily : "Fira Code"
                }}
            >
                {completed ? "Done hai ji" : "Not done hai ji"}
            </div>
        </>
    )
}

const Heading = () => {
    return (
        <>
            <h3
                style = {{
                    color : "blue" , 
                    fontSize :"30px" , 
                    padding : 10 , 
                    margin : 10 , 
                    textDecoration : "underline" ,
                }}
            >
                Todos
            </h3>
        </>
    )
}