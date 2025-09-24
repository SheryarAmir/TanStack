import { Router } from "express";
import healthRouter from "./health.router";
import TodoRouter from "./todo.router";

const Api1 = Router();

Api1.use("/health", healthRouter);
Api1.use("/todo", TodoRouter);

export default Api1;
