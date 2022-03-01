import Connection from './connection';

class Consulta extends Connection{

    // Permite usar el metodo de ConsultUser y retornar la consulta.
    public consult(email: string){
        return this.consultUser(email)
        .then((consult) =>  consult )
        .catch(err => {throw 'El email no se ha encontrado.'});
    }

    // Realiza la consulta a la base de datos
    private consultUser(email: string):Promise<Object>{
        let sql = 'SELECT * FROM UsersGame WHERE email = ?';
        /*
            Se implementa una promesa, para poder retonar la consulta,
            usando una, usando el metodo JSON.stringify, se logra convertir la consulta de la base de datos 
            JSON.parser, se convierte a un JSON y se aplica la desestructuracion de objetos para sacar el Email y El password 
            del usuario y se retonar el objeto.
        */
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [email], (err, rows) => {
                const { Email, PassUser } = JSON.parse(JSON.stringify(rows[0]));
                return err ? reject(err) : resolve({Email, PassUser});
            });
        });
    }
}

export default Consulta;