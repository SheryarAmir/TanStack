import express, { Express } from "express";
import connectToDatabase from "./Connect/connect";
import {applyBodyParsers} from "./Middlewares/CarMiddlerware";
import carRouter from "./Routes/carRouter";
import AuthRouter from "./Routes/AuthRouter"
import cors from "cors";

const app: Express = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connectToDatabase("mongodb://localhost:27017/Carmydatabase");


app.use("/",carRouter)
app.use("/",AuthRouter)

applyBodyParsers(app)
export default app;
