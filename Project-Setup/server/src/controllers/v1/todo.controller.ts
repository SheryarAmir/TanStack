import { Request, Response } from "express";
import Todo from "../../models/todo.modal";

// addtodo
export const addtodo = async (req: Request, res: Response) => {
  try {
    const { title, description, completed } = req.body;

    console.log("Incoming todo:", { title, description, completed });

    if (!title) {
      res.status(400).json({ error: "Title is required" });
    }

    const todo = await Todo.create({
      title,
      description: description,
      completed: false,
    });

    res.status(201).json(todo);
  } catch (err: any) {
    console.error("Error while saving todo:", err.message);
    res.status(500).json({ error: "Failed to add todo" });
  }
};

// All getTodo

export const todos = async (req: Request, res: Response) => {
  try {
    const allTodos = await Todo.find();
    res.json(allTodos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

//getTodoById
export const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log({ id });
    const todo = await Todo.findById(id);

    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
    }

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

//  Delete todo
export const deleteTodo = async (req: Request, res: Response) => {
  console.log("you todo is delete sussessfully");

  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

// Mark as complete

export const completeTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(`Completing todo with id: ${id}`);

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );

    if (!updatedTodo) {
      res.status(404).json({ error: "Todo not found" });
    }

    console.log("Updated todo:", updatedTodo);
    res.status(200).json(updatedTodo);
  } catch (err: any) {
    console.error("Error completing todo:", err.message || err);
    res.status(500).json({ error: "Failed to complete todo" });
  }
};
