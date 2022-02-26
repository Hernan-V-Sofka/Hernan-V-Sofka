import mysql from 'mysql'

class DB {

    private connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'marvelg',
            password: '123456',
            database: 'MarvelGame'
        });
    }

    connect() {
        this.connection.connect((error) => {
            if(error){
                console.log(`Error conexion ${error.stack }`);
            }
            console.log('Esta connectado a la base de datos');
            return this.connection;
        });
    }
    
}


export default DB;