import bcrypt from "bcrypt";

class Seguridad {
    
    private email: string;
    private password: string;

    constructor(email: string, password: string){
 
        this.email = email;
        this.password = password;
    }

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
    
    async passwordCompare(password: string){
        return await bcrypt.compare(password,this.password)
    }

}

export default Seguridad;