import express, { Express } from "express";
import connectToDatabase from "./Connect/connect";
import { applyBodyParsers } from "./Middlewares/CarMiddlerware";
import carRouter from "./Routes/carRouter";
import AuthRouter from "./Routes/AuthRouter";
import cookieParser from "cookie-parser";
import cors from "cors";

declare module "express-serve-static-core" {
  interface Request {
    user: {
      email: string;
      id: string;
    };
  }
}

const app: Express = express();

//  Correct CORS configuration for cookies
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDatabase(process.env.MONGO_URL);

app.use("/health", (req, res) => {
  res.status(200).json({ message: "server is healthy ." });
});

app.use("/", carRouter);
app.use("/", AuthRouter);

applyBodyParsers(app);

export default app;
