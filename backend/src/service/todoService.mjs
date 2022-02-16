import * as todoModel from ('../model/todoModel.mjs');

export function createTodo ({todo}) {
    todoModel.addTodoDB({todo})
}