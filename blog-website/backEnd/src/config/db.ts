import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const connectDB=async ()=>{
try{
    const conn=await mongoose.connect(process.env.MONGODB_URL as string)
    console.log(`mongoDB Connected :${process.env.MONGODB_URL}`)
}
catch(error){
    console.log(`not connect to mongoDB ${error}`)
}

}

export default connectDB;