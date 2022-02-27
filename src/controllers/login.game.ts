import { Request, Response } from "express"

export const getLogin = (req: Request, res: Response) =>{
   
    res.json({
        msg: 'Este es el controlador de login'
    });
    
}