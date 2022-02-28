import Connection from './connection';

class Consulta extends Connection{

    private email: String = '';
    private password: String = '';

    // Instancio
    constructor(email: string){
        super();
        this.busqueda(email);
    }
    
    // No retorna el correo.
    public get getEmail() {
        return this.email;
    }

    public set setEmail(Email: string) {
        this.email = Email;
    }
    
    public getPassword(){
        return this.password;
    }

    public set setPassUser(PassUser: string) {
        this.password = PassUser;
    }

    // Encargado de realizar el parseo del string a objeto para poder desestructurarlo 
    // y poder enviar a los metodos getter y setter para su asignacion y envido de los datos.
    private parseoJson(busqueda: string){  
        const {Email, PassUser} = JSON.parse(busqueda);
        this.setEmail = Email;
        this.setPassUser = PassUser;       
    }
    
    // Realiza la consulta a la base de datos
    private busqueda(email: string){
        // Realiza el query de la consulta y se usa un callback para realizar la validacion de la informacion
        this.connection.query('SELECT * FROM UsersGame WHERE email = ?', [email], (error, busqueda:Array<Object>) => {
            if(error) throw Error;
            // Se envia el objeto el array que tiene el objeto en forma de string.
            this.parseoJson(JSON.stringify(busqueda[0]));
        });
    }
}

export default Consulta;