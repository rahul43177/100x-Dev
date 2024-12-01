import { CreateTodo } from "../components/CreateTodo";
import { Todos } from "../components/Todos";


export default function App() {
    return (
        <div>
            Hi There! This is coming from App.jsx 
            <CreateTodo/>
            <Todos/>
        </div>
    )
}