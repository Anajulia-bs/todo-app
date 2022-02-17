//@ts-check
import { ObjectId } from "mongodb";
import connections from "../connection.js";

// choose the collection
const getCollection = () =>
  connections().then((db) => db.collection("todoList"));

// Add to-do item on DB
export const addTodoDB = async (todo) =>
  (await getCollection()).insertOne(todo).then(({ insertedId }) => ({
    id: insertedId,
    todo,
  }));

// Delete to-do by ID in DB
export const deleteTodoDB = async ({ _id }) =>
  // Using ObjectId in order to properly find the document to be deleted
  (await getCollection()).deleteOne({ _id: new ObjectId(_id) });

// Update to-do by ID in DB
export const updateTodoDB = async ({ id, newTodo }) => {
  console.log({ id, newTodo });
  return (await getCollection()).findOneAndUpdate({ _id: new ObjectId(id) }, [
    { $set: newTodo },
  ]);
};

export const getTodosDB = async () =>
  (await (await getCollection()).find().toArray()).map((todo) => ({
    id: todo._id,
    name: todo.name,
    status: todo.status,
  }));
