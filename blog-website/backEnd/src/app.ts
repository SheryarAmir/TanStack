

import express, {Express} from "express"
import {corsOptions} from "./config/cors.config"
import dotenv from "dotenv";
import cors from "cors"
import Api1 from "./Routes/v1/global.router";


dotenv.config();
const app:Express=express()
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))




app.use("/v1" , Api1)

export default app;