import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
//importo la ruta de Role
import role from "./routes/role.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
//para usar la ruta debemos completar con esta linea
app.use("/api/role",role);
app.listen(process.env.PORT,()=>console.log("Backend server running on port: "+process.env.PORT));

db.dbConnection();