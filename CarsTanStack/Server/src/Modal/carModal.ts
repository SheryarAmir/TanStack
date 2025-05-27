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

    


})


const CarModel=mongoose.model("Cars",CarSchema);
export default CarModel;