//@ts-check
import { api } from ".";

export const getTodos = async () => (await api.get("/todos")).data.todos;

export const postTodo = async (todoInfo) =>
  (await api.post("/todo", todoInfo)).data;

export const deleteTodo = async (todoID) =>
  (await api.delete(`/todo/${todoID}`)).data;

export const putTodo = async (updatedTodo) =>
  (await api.put("/todo", updatedTodo)).data;
