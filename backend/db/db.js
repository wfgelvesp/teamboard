import e from "cors";
import mongoose from "mongoose";

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true,});
        console.log("Connection whit MongoDB: oK");
    } catch (e) {
        console.log("Error connecting to MongoDB "+e);
    }
}

export default {dbConnection};