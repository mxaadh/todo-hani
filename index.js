import express from "express";
import dotenv from "dotenv";
const app = express();
const port = 3000;
import connectDB from "./config/db.js";
import Book from "./models/Book.js";
import Java from "./models/java.js";
import Todo from "./models/todo.js";

dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/javcascript", async (req, res) => {
  const java = await Java.find();
  res.json({ data: java });
});

app.post("/javcascript", async (req, res) => {
  const newjava = new Java(req.body);
  const savejava = await newjava.save();
  res.status(201).json(savejava);
});

app.get("/assignment", async (req, res) => {
  const todo = await Todo.find();
  res.json({ data: todo });
});

app.post("/assigmnent", async (req, res) => {
  const newTodo = new Todo(req.body);
  const saveTodo = await newTodo.save();
  res.status(201).json(saveTodo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
