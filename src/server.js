import createServer from './app.js';
import db from './services/db.js';
const startDbConnection = () => {
    db.connect( process.env.DB_USER, process.env.DB_PASSWORD ).then( () => {
        console.log( `Connection à la base de données OK` )
    } )
}
const startServer = () => {
    const app = createServer();
    app.listen( process.env.SERVER_PORT || 8080, () => {
        console.log(
            `Le serveur est OK sur le port ${ process.env.SERVER_PORT || 8080 }`,
        );
    } );
};
startServer();
startDbConnection()