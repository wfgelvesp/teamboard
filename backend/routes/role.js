import express from "express";
import role from "../controllers/role.js";
//FUNCION QUE TIENE eXPRESS PARA MANEJAR LAS URL (Router)
const router=express.Router();

//indica URL http://localhost:3001/api/role/registerRole
router.post("/registerRole",role.registerRole);

export default router;