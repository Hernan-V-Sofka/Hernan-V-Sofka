import mysql from 'mysql'
import config from './config/config'

const connection = mysql.createConnection({
    host: config.DB.HOST,
    user: config.DB.USER,
    password: config.DB.PASSWORD,
    database: config.DB.DATABASE
});

connection.connect((error) => {
    if(error){
        console.log(`No se puede conectar a la base de datos, error ${ error }`);
    }

    console.log(`Conexion exitosa, el id de la conxion es ${connection.threadId}`);
});