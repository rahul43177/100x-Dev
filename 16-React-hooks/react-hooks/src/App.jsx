import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Todo id={3} />
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
  }, []);

  return (
    <div>
      <h3>{todo.title}</h3>
      <h5>{todo.description}</h5>
    </div>
  );
}

export default App;
