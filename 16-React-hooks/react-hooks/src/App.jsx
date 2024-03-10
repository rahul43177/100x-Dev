import { useState, useEffect } from "react";

//this is custom hook called - useTodos
function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);
  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
