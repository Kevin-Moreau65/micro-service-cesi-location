import express from 'express';
import * as dotenv from 'dotenv';
import routerRent from './routes/rent.js';
import cors from "cors"
dotenv.config();
const createServer = () => {
    const app = express();
    app.use( express.json( { limit: '50mb' } ) );
    app.use( express.urlencoded( { extended: true } ) );
    app.use( cors() )
    app.get( '/', ( req, res ) => res.send( 'OK' ) );
    app.use( '/rent', routerRent );
    app.use( '*', ( req, res ) => res.status( 404 ).send( 'NOT FOUND' ) );
    return app;
};

export default createServer;