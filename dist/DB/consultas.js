"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
class Consulta extends connection_1.default {
    // Permite usar el metodo de ConsultUser y retornar la consulta.
    consult(email) {
        return this.consultUser(email);
    }
    // Realiza la consulta a la base de datos
    consultUser(email) {
        let sql = 'SELECT * FROM UsersGame WHERE email = ?';
        /*
            Se implementa una promesa, para poder retonar la consulta,
            usando una, usando el metodo JSON.stringify, se logra convertir la consulta de la base de datos
            JSON.parser, se convierte a un JSON y se aplica la desestructuracion de objetos para sacar el Email y El password
            del usuario y se retonar el objeto.
        */
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [email], (err, rows) => {
                const { Email, PassUser } = JSON.parse(JSON.stringify(rows[0]));
                return err ? reject(err) : resolve({ Email, PassUser });
            });
        });
    }
}
exports.default = Consulta;
