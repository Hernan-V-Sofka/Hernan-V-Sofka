import connection from './connection';
import Seguridad from '../models/security/seguridad';


class RegisterUser extends connection{
    constructor(){
        super();
    }

    async saveUser(name: string, lastName: string, email: string, password: string){
        const seguridad = new Seguridad(email, password);
        email = seguridad.getEmail;
        password = await seguridad.encript();
        
        this.connection.query(`INSERT INTO UsersGame VALUES("${name}","${lastName}","${email}","${password}","user")`, (error) =>{
            if(error){
                console.log(error);
            }
            console.log('Guardado con exito');
        });
    }
}


export default RegisterUser;