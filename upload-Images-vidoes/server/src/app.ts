
import cors from "cors";
import express, { Express } from "express";
import dotenv from "dotenv";
import Api1 from "./routes/v1/global.router";
import { corsOptions } from "./config/cors.config";
const multer  = require('multer')

const upload = multer({ dest: 'uploads/' })
// import deserializeUser from "./middleware/deserializeUser";
dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions));

// app.use(deserializeUser);
app.use("/v1",single("profileImage")(req ,res), Api1);
export default app;

