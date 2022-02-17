//  @ts-check

import * as todoService from "../service/todoService.mjs";

// Gets the todo info from the request
export async function postTodo(req, res) {
  try {
    const { name } = req.body;
    const { todo } = await todoService.createTodo({ name });
    res.status(201).json({ created: true, ...todo, id: todo._id });
  } catch (err) {
    res.status(500).send(err.toString());
  }
}

export async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const { deletedCount } = await todoService.deleteTodo({ _id: id });
    res.status(204).json({ deleted: deletedCount });
  } catch (err) {
    res.status(500).send(err.toString());
  }
}

export async function putTodo(req, res) {
  try {
    const { id, ...todoData } = req.body;
    const updateResult = await todoService.updateTodo(id, { ...todoData });
    res.status(201).json({ updated: true, ...todoData, updateResult });
  } catch (err) {
    res.status(500).send(err.toString());
  }
}

export async function getTodos(_req, res) {
  try {
    const todos = await todoService.listTodos();
    res.status(200).json({ todos });
  } catch (err) {
    res.status(500).send(err.toString());
  }
}
