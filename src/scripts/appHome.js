


const user ={
    proveedor:true,
    nombre: "Edwin",
    apellido:"Zamora Perez",
    servicio: "Carpintero",
    dateString:"05/06/2024",
    ubicacion:"Cuautitlan, Mexico",
    calificacion:4,
    descripcion:"Realizo el diseño e instalacion de closet con las medidas que tu necesites.",
    adjunto:"",
    ikonik:"",
    comentario:["Muy buenos acabados","termino rapido"],
}

const crearUsuario = (user) => {
    document.getElementById("nombre").textContent = user.nombre;
    document.getElementById("apellido").textContent = user.apellido;
    document.getElementById("servicio").textContent = user.servicio;
    document.getElementById("dateString").textContent = user.dateString;
    document.getElementById("ubicacion").textContent = user.ubicacion;
    document.getElementById("calificacion").textContent = user.calificacion;
    document.getElementById("descripcion").textContent = user.descripcion;
    document.getElementById("adjunto").textContent = user.adjunto;
    document.getElementById("comentario").textContent = user.comentario;
}
crearUsuario(user);

