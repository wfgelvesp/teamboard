//importar hacia donde controllers va a enviar la informacion
import role from "../models/role.js";

const registerRole=async(req,res) => {
    if(!req.body.name || !req.body.description)
        return res.status(400).send("Incomplete data");

    //funcion para validar que el rol no exista
    const existingRole =await role.findOne({name:req.body.name})
    if(existingRole)
        return res.status(400).send("the role alrady exist");
    
    //si el rol no existe y se puede agg a bd, creamos un esquema de la coleccion
    const roleSchema = new role(
        {
            name:req.body.name,
            description:req.body.description,
            dbStatus:true,
        }
    );

    //creamos una variable para guaradar el esquema con la informacion  y llevarla a la base datos
    const result=await roleSchema.save();

    //si se obtinen respuesta positiva del guardado en bd, se debe confirmar
    if(!result)
    return res.status(400).send("failed to register role");

    //se realiza retorno del JSON result
    return res.status(200).send({result});
    //Exportamos para que el metodo quede disponible
    
}
export default{registerRole};

