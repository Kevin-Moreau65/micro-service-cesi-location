import mongoose from 'mongoose';
const { Schema } = mongoose;

const rentSchema = new Schema( {
    car: String, // String is shorthand for {type: String}
    start: String,
    end: String,
} );
const Rent = mongoose.model( 'Rent', rentSchema );
export default Rent