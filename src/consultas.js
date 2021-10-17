/*
Mostrar todos los coches de la marca mercedes.
*/
db.coches.find( { marca: "mercedes" } )

/*
Mostrar todos los coches de la marca mercedes y chevrolet.
*/
db.coches.find( { marca:{ $in: [ "mercedes", "chevrolet" ] }  } )

/*
Mostrar todas las motos de color nfadsfegro o de 1 metro de alto.
*/
db.motos.find( { $or: [ { color: "negro" }, { "dimensiones.altuta": 1 } ] } )

/*
Mostrar todos los coches con altura mayor a 1.4 metros.
*/
db.coches.find( { "dimensiones.altuta": { $gt: 1.4 } } )

/*
Mostrar todos los coches con altura mayor o igual a 1.4 metros.
*/
db.coches.find( { "dimensiones.altuta": { $gte: 1.4 } } )

/*
Mostrar todas las motos con un ancho menor de 0.8.
*/
db.motos.find( { "dimensiones.ancho": { $lt: 0.8 } } )

/*
Mostrar todas las motos con un ancho igual o menor de 0.8.
*/
db.motos.find( { "dimensiones.ancho": { $lte: 0.8 } } )


/*
Mostrar todos los coches que no sean mercedes ni chvrolet.
*/
db.coches.find( { marca:{ $nin: [ "mercedes", "chevrolet" ] }  } )
