import { Router } from "express";
import * as todoController from "../../controllers/v1/todo.controller";

const TodoRouter = Router();

TodoRouter.post("/addtodo", todoController.addtodo);
TodoRouter.get("/todos", todoController.todos);
TodoRouter.get("/:id", todoController.getTodoById);
TodoRouter.delete("/delete/:id", todoController.deleteTodo);
TodoRouter.patch("/complete/:id", todoController.completeTodo);

export default TodoRouter;
