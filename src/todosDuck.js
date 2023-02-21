function todosReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [...todos, action.todo];
    }
    case "TOGGLE_TODO": {
      return todos.map((todo, index) =>
        action.index === index ? { ...todo, checked: !todo.checked } : todo
      );
    }
    default:
      return todos;
  }
}

export default todosReducer;

export function createTodo(newTodo) {
  return {
    type: "ADD_TODO",
    todo: newTodo
  };
}

export function toggleTodo(todoIndex) {
  return {
    type: "TOGGLE_TODO",
    index: todoIndex
  };
}
