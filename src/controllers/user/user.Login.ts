import {Request, Response} from 'express';
import Registro from '../../DB/registerUser'
import Busqueda from '../../DB/consultas';


// Metodo encargado de realizar el registro del usuario en la base de datos
export const singUp = (req: Request, res: Response) => {
    const { name, lastName, email, password } = req.body;
    if(!name || !lastName || !email || !password) {
        return res.status(400).json({ msg:'Por favor, enviar la informacion completa'});
    }
    const registro = new Registro();
    registro.saveUser(name,lastName,email,password);
    res.send('Registro con exito');
}

//Metodo encargado de Iniciar session a los usuarios registrados.
export const singIn = (req: Request, res: Response) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ msg:'Tiene un error en las credenciales ingresadas.'});
    }

    const user = new Busqueda(email);
    let tem = user.getEmail; // traer email y password
    let tem2 = user.getPassword
    console.log(tem);
    console.log(tem2);
    
    
}