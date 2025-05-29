import mongoose from "mongoose";

const CarSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },
//  createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Auth", // or "User"
//     required: true
//   }
    


})


const CarModel=mongoose.model("Cars",CarSchema);
export default CarModel;