"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class DB {
    constructor() {
        this.connection = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'marvelg',
            password: '123456',
            database: 'MarvelGame'
        });
    }
    connect() {
        this.connection.connect((error) => {
            if (error) {
                console.log(`Error conexion ${error.stack}`);
            }
            console.log('Esta connectado a la base de datos');
            return this.connection;
        });
    }
}
exports.default = DB;
