import mongoose from "mongoose";
//Instancia nuevo digrama de coleccion
const roleSchema = new mongoose.Schema(
    {
        name:String,
        description:String,
        registerDate:{type:Date,default:Date.now},
        dbStatus:Boolean,
    }
);
//se crea moldelo para generar coleccion y guardarla en mongoDB
const role=mongoose.model("role",roleSchema);

//los exportamos para usar 
export default role;