import {Request, Response} from 'express';
import Registro from '../../DB/registerUser'

export const singUp = (req: Request, res: Response) => {
    const { name, lastName, email, password } = req.body;
    if(!name || !lastName || !email || !password) {
        return res.status(400).json({ msg:'Por favor, enviar la informacion completa'});
    }
    const registro = new Registro();
    registro.saveUser(name,lastName,email,password);
    res.send('Registro con exito')
}

export const singIn = (req: Request, res: Response) => {
    res.send('singIn');
}