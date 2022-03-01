import Connection from './connection';

class Consulta extends Connection{

    private email: String = '';
    private password: String = '';
    private res: Object = {};

    // Instancio
    constructor(){
        super();
    }
    

    public get getRes(){
        return this.res;
    }

    public set setRes(res: Object){
        this.res = res;
    }

    public buscar(email: string){
        return this.busqueda(email);
    }

    // Realiza la consulta a la base de datos
    private busqueda(email: string){
        let sql = 'SELECT * FROM UsersGame WHERE email = ?';
        // Realiza el query de la consulta y se usa un callback para realizar la validacion de la informacion
        this.connection.query(sql, [email], (error, busqueda:Array<Object>) => {
            if(error) throw Error;
            // Se envia el objeto el array que tiene el objeto en forma de string.
            // Recibe el objeto parseado y retorna el contenido especifico del objeto
            // que obtiene de la base de datos     
            this.parseoJson(JSON.stringify(busqueda[0]))
        });
    }

    public parseoJson(busqueda: string) {  
        const {Email, PassUser} = JSON.parse(busqueda);
        return {Email, PassUser};
    }
 /*
    // No retorna el correo.
    public getEmail() {
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
    public parseoJson(busqueda: string) {  
        const {Email, PassUser} = JSON.parse(busqueda);
        this.setEmail = Email;
        this.setPassUser = PassUser;
        
        console.log(this.getEmail());
        console.log(this.getPassword());
    }

    retorno(retorno: Object): Object{
        return retorno;
    }
    
    */
}

export default Consulta;