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
exports.singIn = exports.singUp = void 0;
const registerUser_1 = __importDefault(require("../../DB/registerUser"));
const consultas_1 = __importDefault(require("../../DB/consultas"));
// Metodo encargado de realizar el registro del usuario en la base de datos
const singUp = (req, res) => {
    const { name, lastName, email, password } = req.body;
    if (!name || !lastName || !email || !password) {
        return res.status(400).json({ msg: 'Por favor, enviar la informacion completa' });
    }
    const registro = new registerUser_1.default();
    registro.saveUser(name, lastName, email, password);
    res.send('Registro con exito');
};
exports.singUp = singUp;
//Metodo encargado de Iniciar session a los usuarios registrados.
const singIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Tiene un error en las credenciales ingresadas.' });
    }
    const user = new consultas_1.default();
    console.log(yield user.consult(email));
    // console.log(tem2);
});
exports.singIn = singIn;
