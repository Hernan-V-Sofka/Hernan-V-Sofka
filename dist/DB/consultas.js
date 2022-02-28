"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
class Consulta extends connection_1.default {
    // Instancio
    constructor(email) {
        super();
        this.email = '';
        this.password = '';
        this.busqueda(email);
    }
    // No retorna el correo.
    get getEmail() {
        return this.email;
    }
    set setEmail(Email) {
        this.email = Email;
    }
    getPassword() {
        return this.password;
    }
    set setPassUser(PassUser) {
        this.password = PassUser;
    }
    // Encargado de realizar el parseo del string a objeto para poder desestructurarlo 
    // y poder enviar a los metodos getter y setter para su asignacion y envido de los datos.
    parseoJson(busqueda) {
        const { Email, PassUser } = JSON.parse(busqueda);
        this.setEmail = Email;
        this.setPassUser = PassUser;
    }
    // Realiza la consulta a la base de datos
    busqueda(email) {
        // Realiza el query de la consulta y se usa un callback para realizar la validacion de la informacion
        this.connection.query('SELECT * FROM UsersGame WHERE email = ?', [email], (error, busqueda) => {
            if (error)
                throw Error;
            // Se envia el objeto el array que tiene el objeto en forma de string.
            this.parseoJson(JSON.stringify(busqueda[0]));
        });
    }
}
exports.default = Consulta;
