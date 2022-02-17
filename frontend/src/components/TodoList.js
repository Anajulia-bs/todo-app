//@ts-check

import Todo from "./Todo";
const TodoList = ({ todos, onDelete, onClickTodo }) => {
  return todos.map(({ name, status, id }) => (
    <Todo
      key={id}
      onClick={onClickTodo}
      name={name}
      status={status}
      onDelete={onDelete}
      id={id}
    />
  ));
};
export default TodoList;
