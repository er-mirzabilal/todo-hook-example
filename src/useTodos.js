import { useReducer, useState, useRef, useCallback, useMemo } from "react";
import todosReducer, {
  createTodo as createTodoAction,
  toggleTodo as toggleTodoAction
} from "./todosDuck";

function useTodos(initialTodos) {
  const inputEl = useRef(null);
  const [todoLabel, updateTodoInput] = useState("");
  const [todos, todosDispatch] = useReducer(todosReducer, initialTodos);

  const newTodo = useMemo(
    () => ({
      label: todoLabel,
      checked: false
    }),
    [todoLabel]
  );

  const todoInput = useMemo(
    () => ({
      ref: inputEl,
      value: todoLabel,
      onChange: e => updateTodoInput(e.target.value)
    }),
    [inputEl, todoLabel]
  );

  const createTodo = useCallback(
    newTodo => {
      todosDispatch(createTodoAction(newTodo));

      updateTodoInput("");
      inputEl.current.focus();
    },
    [inputEl]
  );

  const toggleTodo = useCallback(todoIndex => {
    todosDispatch(toggleTodoAction(todoIndex));
  }, []);

  return {
    todos,
    newTodo,
    createTodo,
    toggleTodo,
    todoInput
  };
}

export default useTodos;
