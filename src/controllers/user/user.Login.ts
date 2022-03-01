import {Request, Response} from 'express';
import Registro from '../../DB/registerUser'
import Busqueda from '../../DB/consultas';
import Seguridad from '../../models/security/seguridad';


// Metodo encargado de realizar el registro del usuario en la base de datos
export const singUp = (req: Request, res: Response) => {
    const { name, lastName, email, password } = req.body;
    if(!name || !lastName || !email || !password) {
        return res.status(400).json({msg: 'Por favor, enviar la informacion completa'});
    }
    const registro = new Registro();
    registro.saveUser(name,lastName,email,password);
    res.send('Registro con exito');
    return res.status(201).json();
}

// Metodo encargado de Iniciar session a los usuarios registrados.
export const singIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ msg:'Tiene un error en las credenciales ingresadas.'});
    }

    const busqueda = new Busqueda();
    const User = await busqueda.consult(email);

    
    if((Object.entries(User).length === 0) === true){
        return res.status(400).json({msg: 'El usuario ingresado no existe'});
    }
   
    const seguridad = new Seguridad(email, password);
    seguridad.passwordCompare(User.Email);
       
}