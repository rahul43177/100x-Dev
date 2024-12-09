import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React from scratch!",
    },
    {
      id: 2,
      title: "Learn Nodejs",
      description: "Learn Nodejs from scratch!",
    },
    {
      id: 3,
      title: "Learn MongoDB",
      description: "Learn MongoDB from scratch!",
    },
  ]);
  return (
    <>
      {todos.map((singleTodo) => {
        return (
          <Todos
            key={singleTodo.id}
            title={singleTodo.title}
            description={singleTodo.description}
          />
        );
      })}
    </>
  );
}

const Todos = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
