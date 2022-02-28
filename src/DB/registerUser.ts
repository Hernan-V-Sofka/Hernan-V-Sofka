import connection from './connection';
import Seguridad from '../models/security/seguridad';
import Consulta from './consultas';

class RegisterUser extends connection{
    constructor(){
        super();
    }

    async saveUser(name: string, lastName: string, email: string, password: string){
        const seguridad = new Seguridad(email, password);
        email = seguridad.getEmail;
        password = await seguridad.encript();
       /* Terminar de implementar el modulo de busqueda para la validar el registro de los usuarios y si ya estan registrados
        redirigilos a otro modulo.
        const consul = new Consulta();
        const busqueda = consul.busqueda(email);
        console.log(busqueda);
        
        itf(consul.busqueda(email) == true){
        }
        */

        // Query encargado de generar la insercion en la base de datos del usuario.
        this.connection.query('INSERT INTO UsersGame (NameUser, LastName, Email, PassUser, TypeUser) VALUES (?, ?, ?, ?, ?);',
            [name,lastName,email,password, 'user'],(error) => {
            if(error) throw error;
            
        });
    }
}


export default RegisterUser;