//@ts-check
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {
  postTodo,
  deleteTodo,
  putTodo,
  getTodos,
} from "./src/controller/todoController.mjs";
const app = express();
const PORT = 3000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.status(200).send("its working"));

app.post("/todo", postTodo);
app.get("/todos", getTodos);
app.delete("/todo/:id", deleteTodo);
app.put("/todo/", putTodo);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

export default app;
