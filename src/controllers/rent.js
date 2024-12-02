import RentService from "../services/rent.js"

const getRents = async ( req, res ) => {
    const data = await RentService.get()
    return res.status( 200 ).json( data )
}
const getRent = async ( req, res ) => {
    if ( !req.params.id ) {
        return res.status( 400 ).json( { error: "Missing id param" } )
    }
    const data = await RentService.getOne( req.params.id )
    if ( data === undefined ) {
        return res.status( 404 ).json( { error: "Rent not found" } )
    }
    return res.status( 200 ).json( { data } )
}
const updateRent = async ( req, res ) => {
    if ( !req.params.id || !req.body.rent ) {
        return res.status( 400 ).json( { error: "Missing id param" } )
    }
    const data = await RentService.modify( req.params.id, req.body.rent )
    if ( data === null ) {
        return res.status( 404 ).send()
    }
    return res.status( 200 ).send()
}
const createRent = async ( req, res ) => {
    if ( !req.body.rent ) {
        return res.status( 400 ).json( { error: "Missing rent in body" } )
    }
    await RentService.create( req.body.rent )
    return res.status( 201 ).send()
}
const deleteRent = async ( req, res ) => {
    if ( !req.params.id ) {
        return res.status( 400 ).json( { error: "Missing id param" } )
    }
    await RentService.remove( req.params.id )
    return res.status( 204 ).send()
}
export {
    getRents,
    createRent,
    getRent,
    updateRent,
    deleteRent
}