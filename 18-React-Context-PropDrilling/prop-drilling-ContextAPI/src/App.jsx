import { useState, useContext } from 'react';
import CountContext from './context';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return (
    <div>
      <p
        style={{
          color: count % 2 === 0 || count === 0 ? 'green' : 'red',
          fontSize: '100px',
          fontWeight: 'bold',
          marginLeft: '60px',
        }}
      >
        {count}
      </p>
    </div>
  );
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}