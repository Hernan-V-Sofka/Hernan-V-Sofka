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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const entorno_1 = __importDefault(require("../entorno"));
const connection_1 = __importDefault(require("../DB/connection"));
const login_routes_1 = __importDefault(require("../routes/login.routes"));
/*
    Clase encargada de inicializar el servidor
    Contiene las instancias de:
    > La conexion a la base de datos
    > Los middlewares
    > Las rutas de direccionamiento de la Api
*/
class Server {
    constructor() {
        this.apiPaths = {
            login: '/game/login'
        };
        this.app = (0, express_1.default)();
        this.port = entorno_1.default.port || '8000';
        // Llamada al metodo de los meddelwares
        this.dbConnection();
        this.middleware();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = new connection_1.default();
                yield connection.connect();
            }
            catch (error) {
                throw new Error('Error de conexion');
            }
        });
    }
    middleware() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.login, login_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
