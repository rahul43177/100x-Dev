import {useState} from 'react'
import './App.css'

export default function Board() {
  return (
    <>
        <div className="board-row">
         <Sqaure value = "1"/>
         <Sqaure value = "2"/>
         <Sqaure value = "3"/>
        </div>

        <div className="board-row">
         <Sqaure value = "4"/>
         <Sqaure value = "5"/>
         <Sqaure value = "6"/>
        </div>

        <div className="board-row">
         <Sqaure value="7"/>
         <Sqaure value="8"/>
         <Sqaure value="9"/>
        </div>
    </>
  )
}


const Sqaure = ({value}) => {
  const [value, setValue] = useState(null)
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <button 
      className = "sqaure"
      onClick={handleClick}
    >
      {value}
    </button>
  ) 
    
}