import {useState} from 'react'

function App() {
  const [count , setCount] = useState(0)

  return (
    <CustomButton count = {count} setCount={setCount}></CustomButton>
  )
}

function CustomButton(props) {

  function onClickHander() {
    props.setCount(props.count + 1)
  }

  return (
    <button onClick={onClickHander}>
      Counter {props.count}
    </button>
  )
}

export default App
