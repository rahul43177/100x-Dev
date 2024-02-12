import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [intputValue, setInputValue] = useState(1);

  let sum = 0;
  for (let i = 1; i <= intputValue; i++) {
    sum += i;
  }

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter a number to find sum till n"
      />
      <br /> <br />
      The sum from 1 to {intputValue} is {sum}
      <br />
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Press to increase the counter
      </button>
      {counter}
    </div>
  );
}

export default App;
