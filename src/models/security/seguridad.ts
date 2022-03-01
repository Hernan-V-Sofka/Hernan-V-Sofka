import bcrypt from "bcrypt";


/* 
    Clase encargada de 
        > Validar que el email no tengan mayusculas
        > Encriptar el password
        > Comparar el password, el que esta en la base de datos y el que manda el usuario.
*/
class Seguridad {
    
    private email: string;
    private password: string;

    constructor(email: string = '', password: string){
        this.email = email;
        this.password = password;
    }

    // verifico que el correo que recibo este todo en minusculas.
    public set setEmail(email: string){
        this.email = email.toLowerCase();
    }

    public get getEmail(){
        return this.email;
    }
    
    // Metodo encargado de encriptar la contraseña de los usuarios que se registran
    async encript(){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        return this.password = await hash;
    }
    
    // Metodo encargao de comparar los password de los usuarios, el que ingresa 
    // y el que se encuentra en la base de datos.
    async passwordCompare({PassUser}:{PassUser:string}){
        return await bcrypt.compare(PassUser, this.password)
    }

}

export default Seguridad;