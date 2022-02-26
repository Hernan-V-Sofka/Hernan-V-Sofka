"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const config_1 = __importDefault(require("./config/config"));
const connection = mysql_1.default.createConnection({
    host: config_1.default.DB.HOST,
    user: config_1.default.DB.USER,
    password: config_1.default.DB.PASSWORD,
    database: config_1.default.DB.DATABASE
});
connection.connect((error) => {
    if (error) {
        console.log(`No se puede conectar a la base de datos, error ${error}`);
    }
    console.log(`Conexion exitosa, el id de la conxion es ${connection.threadId}`);
});
