
import mongoose from 'mongoose';

async function connectToDatabase(URL:any):Promise<void>{
try{
await mongoose.connect(URL)
console.log("Connected to MongoDB");
}
catch (error){
console.error("Error connecting to MongoDB", error);
}

}
    
export default connectToDatabase;