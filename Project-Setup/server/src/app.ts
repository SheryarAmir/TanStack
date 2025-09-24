import cors from "cors";
import express, { Express } from "express";
import dotenv from "dotenv";
import Api1 from "./routes/v1/global.router";
import { corsOptions } from "./config/cors.config";

dotenv.config();

const app: Express = express();

app.use(express.json()); // 👈 must come before routes
app.use(cors(corsOptions)); // 👈 enable CORS

app.use("/v1", Api1);

export default app;
