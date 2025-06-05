
import *as http from "http"
import connectDB from "./config/db"
import dotenv from "dotenv"
import app from "./app"

dotenv.config()

const PORT = process.env.PORT || 8000;

const httpServer :http.Server=http.createServer(app)


async function startServer():Promise<void>{

    try{

        await connectDB();

        httpServer.listen(PORT, ()=>{
            console.log(`server is running on the port ${PORT}`)
        })
    }
    catch(error){

        console.log("failed to start a server:" , error)
    }

}

startServer();