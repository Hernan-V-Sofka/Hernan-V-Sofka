import express, {Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'

import DB from '../DB/connection'

class Server {

    private app: Application;
    private port: string;
    

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        // Llamada al metodo de los meddelwares
        this.middleware();
        this.routes();
    }
    
    async dbConnection(){
        try {
            const connection = new DB;
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
        
    }

    listen() {
        this.app.listen(this.port, () =>{
            console.log(`Servidor corriendo en puerto ${ this.port }`);
        });
    }
}

export default Server;