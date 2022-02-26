import dotenv from 'dotenv'

import cors from 'cors'
import Server from './models/server';

//Configuracion de las variables de entorno
dotenv.config();

// Inicializacion del servidor
const server = new Server;
server.listen();
