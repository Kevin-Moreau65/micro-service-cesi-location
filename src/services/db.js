import mongoose from "mongoose";
const connect = ( username, password ) => mongoose.connect( `mongodb://${ username }:${ password }@${ process.env.DB_HOST }:${ process.env.DB_PORT }` );
const db = { connect }
export default db