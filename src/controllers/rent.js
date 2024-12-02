const data = [ {
    id: 0,
    car: "BMW E46",
    start: "date",
    end: "date"
},
{
    id: 1,
    car: "CLIO 3",
    start: "date",
    end: "date"
}
]
const getRents = ( req, res ) => {
    return res.status( 200 ).json( data )
}
const getRent = ( req, res ) => {
    if ( !req.params.id ) {
        return res.status( 400 ).json( { error: "Missing id param" } )
    }
    const numberId = Number( req.params.id )
    if ( !data.some( ( loc => loc.id === numberId ) ) ) {
        return res.status( 404 ).json( { error: "Rent not found" } )
    }
    return res.status( 200 ).json( data.find( ( loc => loc.id === numberId ) ) )
}
const updateRent = ( req, res ) => {
    if ( !req.params.id ) {
        return res.status( 400 ).json( { error: "Missing id param" } )
    }
    const numberId = Number( req.params.id )
    if ( !data.some( ( loc => loc.id === numberId ) ) ) {
        return res.status( 404 ).json( { error: "Rent not found" } )
    }
    return res.status( 200 ).send()
}
const createRent = ( req, res ) => {
    if ( !req.body.rent ) {
        return res.status( 400 ).json( { error: "Missing rent in body" } )
    }
    return res.status( 201 ).send()
}
const deleteRent = ( req, res ) => {
    if ( !req.params.id ) {
        return res.status( 400 ).json( { error: "Missing id param" } )
    }
    const numberId = Number( req.params.id )
    if ( !data.some( ( loc => loc.id === numberId ) ) ) {
        return res.status( 404 ).json( { error: "Rent not found" } )
    }
    return res.status( 204 ).send()
}
export {
    getRents,
    createRent,
    getRent,
    updateRent,
    deleteRent
}