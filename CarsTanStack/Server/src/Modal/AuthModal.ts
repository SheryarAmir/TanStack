import mongoose from "mongoose";

const AuthSchema= new mongoose.Schema({

email:{
    type:String,
    require:true,
    unique: true,

},

password:{
     type:String,
    require:true,
   
}

})

const Auth =mongoose.model("Auth", AuthSchema)

export default Auth



