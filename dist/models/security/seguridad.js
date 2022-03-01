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
const bcrypt_1 = __importDefault(require("bcrypt"));
/*
    Clase encargada de
        > Validar que el email no tengan mayusculas
        > Encriptar el password
        > Comparar el password, el que esta en la base de datos y el que manda el usuario.
*/
class Seguridad {
    constructor(email = '', password) {
        this.email = email;
        this.password = password;
    }
    // verifico que el correo que recibo este todo en minusculas.
    set setEmail(email) {
        this.email = email.toLowerCase();
    }
    get getEmail() {
        return this.email;
    }
    // Metodo encargado de encriptar la contraseña de los usuarios que se registran
    encript() {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            const hash = yield bcrypt_1.default.hash(this.password, salt);
            return this.password = yield hash;
        });
    }
    // Metodo encargao de comparar los password de los usuarios, el que ingresa 
    // y el que se encuentra en la base de datos.
    passwordCompare({ PassUser }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.compare(PassUser, this.password);
        });
    }
}
exports.default = Seguridad;
