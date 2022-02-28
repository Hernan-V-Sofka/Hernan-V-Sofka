import express, {Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'

import entorno from '../entorno';
import DB from '../DB/connection'
import login from '../routes/login.routes'


/* 
    Clase encargada de inicializar el servidor 
    Contiene las instancias de:
    > La conexion a la base de datos 
    > Los middlewares 
    > Las rutas de direccionamiento de la Api
*/
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        login:'/game/login'
    }

    constructor(){
        this.app = express();
        this.port = entorno.port|| '8000';

        // Llamada al metodo de los meddelwares
        this.dbConnection();
        this.middleware();
        this.routes();
    }
    
    async dbConnection(){
        try {
            const connection = new DB();
            await connection.connect();
        } catch (error) {
            throw new Error('Error de conexion');
        }
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.login, login);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${ this.port }`);
        });
    }
}

export default Server;