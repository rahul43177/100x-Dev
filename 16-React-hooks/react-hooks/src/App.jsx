import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <div>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>

      {`Selected ID : ${selectedId}`}
      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todos?id=${id}`)
      .then((response) => {
        setTodo(response.data.todos[0]);
      });
  }, [id]);

  return (
    <div>
      <h3>{todo.title}</h3>
      <h5>{todo.description}</h5>
    </div>
  );
}

export default App;
