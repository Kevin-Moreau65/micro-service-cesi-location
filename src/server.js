import createServer from './app.js';
const startServer = () => {
    const app = createServer();
    app.listen( process.env.SERVER_PORT || 8080, () => {
        console.log(
            `Le serveur est OK sur le port ${ process.env.SERVER_PORT || 8080 }`,
        );
    } );
};
startServer();