"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singIn = exports.singUp = void 0;
const registerUser_1 = __importDefault(require("../../DB/registerUser"));
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
const singIn = (req, res) => {
    res.send('singIn');
};
exports.singIn = singIn;
