import {useState , memo} from 'react'

function App() {
  const [title , setTitle] = useState("My name is khan")
  function updateTitle() {
    setTitle(`My name is ${Math.random()}`)
  }
  return (
    <div>
      <button onClick={updateTitle}>Click here to update the title</button>
      <Header title = "HAHAHAHA"/>
      <Header title = "rasad"/>
      <Header title = {title}/>
    </div>
  )
}

const Header = memo(function Header({title}) {
  return <div>
    {title}
  </div>
} )


export default App