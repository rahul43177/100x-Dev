import {useState , memo} from 'react'

export default function App() {
    const [title , setTitle] = useState("MY name is Rahul Mishra")
    
    function updateTitle(){
        setTitle("My name is " + Math.random());
    }

    return (
        <div>
            <button onClick={updateTitle}>Update the title</button>
            <Header title = {title}/>
            <Header title = "Static title" />
            <Header title = "Static title 2" />
            <Header title = "Static title 3" />
            <Header title = "Static title 4" />
            <Header title = "Static title 5" />
            <Header title = "Static title 6" />
            <Header title = "Static title 7" />
        </div>
    )
}

const Header = memo(function Header({title}) { // memo is used to prevent re-rendering of the component when the state is not changed
    return <div>
        {title}
    </div>
})

