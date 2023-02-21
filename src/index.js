import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import useTodos from "./useTodos";
import TodoItem from "./TodoItem";

const initialTodos = [
  { label: "Hello", checked: false },
  { label: "useTodos hook experiment", checked: true },
  { label: "World", checked: false }
];

function App() {
  const { todos, newTodo, createTodo, toggleTodo, todoInput } = useTodos(
    initialTodos
  );

  return (
    <div className="App">
      <h2>React hooks TodoList</h2>
      <h3>with useTodos custom hook</h3>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.label}
            index={index}
            todo={todo}
            onClick={() => toggleTodo(index)}
          />
        ))}
      </ul>
      <input {...todoInput} />
      <button onClick={() => createTodo(newTodo)}>Create todo</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
