import Rent from "../models/rent.js"

const get = async () => {
    return await Rent.find()
}
const getOne = async ( id ) => {
    return await Rent.findById( id )
}
const create = async ( car ) => {
    return await Rent.create( car )
}
const remove = async ( id ) => {
    return await Rent.findByIdAndDelete( id )
}
const modify = async ( id, car ) => {
    return await Rent.findByIdAndUpdate( id, car )
}
const RentService = {
    get, getOne, create, remove, modify
}
export default RentService