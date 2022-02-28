"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const seguridad_1 = __importDefault(require("../models/security/seguridad"));
class RegisterUser extends connection_1.default {
    constructor() {
        super();
    }
    saveUser(name, lastName, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const seguridad = new seguridad_1.default(email, password);
            email = seguridad.getEmail;
            password = yield seguridad.encript();
            /* Terminar de implementar el modulo de busqueda para la validar el registro de los usuarios y si ya estan registrados
             redirigilos a otro modulo.
             const consul = new Consulta();
             const busqueda = consul.busqueda(email);
             console.log(busqueda);
             
             itf(consul.busqueda(email) == true){
             }
             */
            // Query encargado de generar la insercion en la base de datos del usuario.
            this.connection.query('INSERT INTO UsersGame (NameUser, LastName, Email, PassUser, TypeUser) VALUES (?, ?, ?, ?, ?);', [name, lastName, email, password, 'user'], (error) => {
                if (error)
                    throw error;
            });
        });
    }
}
exports.default = RegisterUser;
