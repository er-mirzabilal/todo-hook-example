import React from "react";
import PropTypes from "prop-types";

const TodoItem = React.memo(props => {
  return (
    <li
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={props.todo.checked ? "done" : ""}
    >
      {props.todo.label}
    </li>
  );
}, (prevProps, nextProps) => prevProps.todo === nextProps.todo);

TodoItem.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.shape({
    checked: PropTypes.boolean,
    label: PropTypes.sring
  }),
  toggleTodo: PropTypes.func
};

export default TodoItem;
