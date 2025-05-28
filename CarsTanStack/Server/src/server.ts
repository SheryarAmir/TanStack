import express, { Express } from "express";
import connectToDatabase from "./Connect/connect";
import { applyBodyParsers } from "./Middlewares/CarMiddlerware";
import carRouter from "./Routes/carRouter";
import AuthRouter from "./Routes/AuthRouter";
import cookieParser from "cookie-parser";
import cors from "cors";


const app: Express = express();

//  Correct CORS configuration for cookies
app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true,              
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDatabase("mongodb://localhost:27017/Carmydatabase");

app.use("/",carRouter);
app.use("/" , AuthRouter);

applyBodyParsers(app);

export default app; 
