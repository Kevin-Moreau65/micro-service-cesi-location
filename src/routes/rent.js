import express from 'express';
import { createRent, deleteRent, getRent, getRents, updateRent } from '../controllers/rent.js';
const routerRent = express.Router();

routerRent.get( '/', getRents );
routerRent.get( '/:id', getRent );
routerRent.post( '/create', createRent );
routerRent.put( '/:id', updateRent );
routerRent.delete( '/:id', deleteRent );
export default routerRent;