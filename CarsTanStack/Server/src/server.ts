import express, { Express } from "express";
import connectToDatabase from "./Connect/connect";
import {applyBodyParsers} from "./Middlewares/middlerware";
import carRouter from "./Routes/carRouter";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connectToDatabase("mongodb://localhost:27017/Carmydatabase");


app.use("/",carRouter)
applyBodyParsers(app)
export default app;
