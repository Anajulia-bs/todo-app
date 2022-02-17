//@ts-check
import * as todoModel from "../model/todoModel.mjs";

export function createTodo(todo) {
  return todoModel.addTodoDB({
    ...todo,
    createdAt: Date.now(),
    status: "pending",
  });
}

/**
 * @param {{ _id: any; }} todo
 */
export function deleteTodo(todo) {
  return todoModel.deleteTodoDB(todo);
}

/**
 * @param {any} id
 * @param {{ name: any; }} newTodo
 */
export function updateTodo(id, newTodo) {
  return todoModel.updateTodoDB({ id, newTodo });
}
export function listTodos() {
  return todoModel.getTodosDB();
}
