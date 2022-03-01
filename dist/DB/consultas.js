"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
class Consulta extends connection_1.default {
    // Instancio
    constructor() {
        super();
        this.email = '';
        this.password = '';
        this.res = {};
    }
    get getRes() {
        return this.res;
    }
    set setRes(res) {
        this.res = res;
    }
    buscar(email) {
        return this.busqueda(email);
    }
    // Realiza la consulta a la base de datos
    busqueda(email) {
        let sql = 'SELECT * FROM UsersGame WHERE email = ?';
        // Realiza el query de la consulta y se usa un callback para realizar la validacion de la informacion
        this.connection.query(sql, [email], (error, busqueda) => {
            if (error)
                throw Error;
            // Se envia el objeto el array que tiene el objeto en forma de string.
            // Recibe el objeto parseado y retorna el contenido especifico del objeto
            // que obtiene de la base de datos     
            this.parseoJson(JSON.stringify(busqueda[0]));
        });
    }
    parseoJson(busqueda) {
        const { Email, PassUser } = JSON.parse(busqueda);
        return { Email, PassUser };
    }
}
exports.default = Consulta;
