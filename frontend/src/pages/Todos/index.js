import { useState, useEffect } from "react";
import TodoList from "../../components/TodoList";
import { deleteTodo, getTodos, postTodo, putTodo } from "../../services/todo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [loading, setLoading] = useState(false);

  const refreshTodos = () => getTodos().then(setTodos);

  useEffect(() => {
    refreshTodos();
  }, []);

  const hideLoading = () => setLoading(false);

  const onClickAdd = async () => {
    if (!!todoName) {
      setLoading(true);
      const postedTodo = await postTodo({ name: todoName }).finally(
        hideLoading
      );
      setTodos([...todos, postedTodo]);
      setTodoName("");
    }
  };

  const onClickDelete = async ({ id }) => {
    setLoading(true);
    await deleteTodo(id).finally(hideLoading);
    setTodos((oldTodos) => oldTodos.filter((oldTodo) => oldTodo.id !== id));
  };

  const updateTodo = async ({ id, ...newTodo }) => {
    setLoading(true);

    await putTodo({ id, ...newTodo }).finally(hideLoading);
    refreshTodos();
  };

  return (
    <div className="App min-h-screen  flex-col bg-white justify-center  p-8">
      <div className="flex justify-center flex-row">
        <input
          value={todoName}
          data-testid="todo-input"
          onChange={({ target }) => setTodoName(target.value)}
          className="p-6 w-96 bg-white rounded-xl shadow-lg mr-2"
        />
        <button
          data-testid="add-todo-btn"
          onClick={onClickAdd}
          className="rounded-xl bg-green-50 max-w-md shadow-lg  p-6 "
        >
          Add
        </button>
      </div>
      <div className="mx-auto h-10"> {loading && "Loading..."}</div>
      <TodoList
        onClickTodo={updateTodo}
        onDelete={onClickDelete}
        todos={todos}
      />
    </div>
  );
}
export default Todos;
