//Objetos en formato JSON agregados en javascript
const publicaciones = ` [
    {  "proveedor":true,
       "nombre":"Edwin",
       "apellido":"Zamora Perez",
       "servicio":"Carpintero",
       "date string":"05/06/2024",
       "ubicacion":"Cuautitlan, Mexico",
       "calificacion":4,
       "descripcion":"Realizo el diseño e instalacion de closet con las medidasque tu necesites",
       "adjunto":["https://scontent.fmex1-2.fna.fbcdn.net/v/t39.30808-6/240863250_4240290616061624_1739335501323499715_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=gkwj4gls5CEQ7kNvgGi0a-Z&_nc"],
       "ikonik":"", 
       "comentario":["Muy buenos acabados, entrego rápido"]
    },
    {
    "proveedor": true,
     "nombre":"Martín",
     "apellido":"López Paz ",
     "servicio":"Electricista",
     "date stringf":"05/06/2024",
     "ubicacion":"Toluca, México",
     "calificacion":4,
     "descripcion":"Realizo instalaciones electricas en casas habitación",
     "adjunto":["https://img.freepik.com/fotos-premium/electricista-instala-cajas-enchufes-pared-pone-masilla_255667-47730.jpg?w=740"],
     "ikonik":"",
     "comentario":["Instalación muy limpia y bien conectado", ""]
  },
  {
   
    "proveedor": true,
    "nombre":"Carlos",
   "apellido":" Santana ",
  "servicio":"Plomero",
  "fecha":"05/08/2024",
  "ubicacion":"Naucalpan, Mexico",
  "calificacion": 4,
  "descripcion":"Arreglo todo tipo de goteras de todo tipo en general",
  "adjunto":["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.plomeriaydrenajesavendano.com%2Fsabes-como-cuidar-tu-plomeria&psig=AOvVaw0crumR74DCff0pYMo6OJq1&ust=1723044365183000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiSsczW4IcDFQAAAAAdAAAAABAE"],
  "ikonik":"", 
  "comentario":[""]
}, 
{
    "proveedor": true,
    "nombre":"Lupe",
    "apellido":"Gonzalez",
    "servicio":"Limpieza",
    "fecha":"05/08/2024",
    "ubicacion":"Ciudad Neza",
    "calificacion":5,
    "descripcion":"Hago limpiezas profundas de toda la casa",
    "adjunto":[""],
    "ikonik":"", 
    "comentario":[""]
},
{
    "proveedor": true,
    "nombre": "Cielo Patricia",
    "apellido": "Constantine",
    "servicio": "Carpintería",
    "date string": "02/08/2024",
    "ubicacion": "Xalapa, Veracruz.",
    "calificacion": 4.8,
    "descripcion": "Realizo trabajos a detalle de todo tipo de carpintería, principalmente muebles",
    "adjunto": [""],
    "ikoni" : "",
    "comentario" : ["Aprovecha bien el material.", "Entrega a tiempo", "Realizó la reparación de un mueble bien viejo, quedó muy bien"]
},  
{
    "proveedor": false,
    "nombre":"Juan Jose",
    "apellido":"Jimenez",
   "servicio":"Electricidad",
   "date string": "05/06/2024",
   "ubicacion":"Tlalpan, CDMX",
   "calificacion": 4.5,
   "descripcion":"Busco quien pueda realizar servicio de instalacion para  enchufes en un cuarto nuevo",
   "adjunto":["https://www.revista.ferrepat.com/wp-content/uploads/2016/03/electricista_1.jpg"],
   "ikonik":"", 
    "comentario":[""]
}, 
{
    "proveedor" : true,
    "nombre" : "Carlos",
    "apellido" : "Torrez Tavarez",
    "servicio" : "Carpintero",
    "fecha" : "02/11/24",
    "ubicacion" : "Calle esperansa #205",
    "calificacion" : 4,
    "descripcion" : "Creacion y reparacion de cualquier tipo de mueble, todo al mejor precio.",
    "adjunto" : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLPZkVfoEnHWhAlpx2DABBMQOlwZ413LO9w&s"],
    "ikonik" : "",
    "comentario" : ["Deja unos buenos acabados.", "Es lento para entrgar los muebles, no los quiero ya", "Los muebles parecen que brillan con el barniz"]
},
{
    "proveedor": true,
    "nombre":"Luis Enrique",
    "apellido":"Gonzalez",
   "servicio":"Plomería",
  "date string": "05/06/2024",
   "descripcion":":¡Hola a todos! Miren el último trabajo que realicé. Mi cliente presentaba  severas fugas en su tubería. Las fugas de agua pueden causar grandes problemas si no se detectan a tiempo. Revisa regularmente las juntas y conexiones de tus grifos y tuberías. Si necesitas ayuda, contáctame",
   "adjunto":"https://ejemplo.com/imagen/plomerochambeando.jpg",
      "ubicacion":"Iala,pa, CDMX.",
   "calificacion": 4.8,
   "ikonik":"", 
 "comentario" : [ "Me gustó mucho el trabajo que realizó", "Sin duda alguna lo volvería a contactar"]
},
 {
        "proveedor": true,
        "nombre":"Juan",
        "apellido":"Pérez",
       "servicio":"Carpintería",
       "date string":"06-08-2024",
       "ubicacion":"Ciudad de México",
       "calificacion":5,
       "descripcion":"Ofrezco servicios de carpintería personalizados, incluyendo muebles a medida, reparaciones y restauraciones de madera.",
       "adjunto":[""],
       "ikoni":"", 
       "comentario":["Estoy muy satisfecho con el trabajo realizado. Juan fue puntual, profesional y su atención al detalle es excepcional. Recomiendo sus servicios sin dudar."]
 
       },

{  
    "proveedor":true,
    "nombre":"Javier",
    "apellido":"Hernandez",
    "servicio":"clases de ingles",
    "date string":"08/08/2024",
    "ubicacion":"Cuahutemoc, Ciudad de Mexico",
    "calificacion":4,
    "descripcion":"Quieres mejorar tu ingles de manera rapida y efectiva? Clases particulares individuales y en grupo  adaptadas a tu nivel. Ya sea que desees mejorar pronunciacion, aprender gramatica usar el ingles para tu trabajo o estudios. Flexibilidad de horarios y clases virtuales y presenciales disponibles. ",
    "adjunto":[""],
    "ikonik":"", 
    "comentario":["Me encantan sus clases, ayudo a mejorar mi comprension de los tiempos verbales y tuve un avance super rapido, me encanta que usa muchas tecnicas de enseñanza y tiene invitados angloparlantes nativos par que puedas escuchar realmente como es la pronunciacion del ingles"]

}]
    `;
//Las instancias agregadas en formato JSON  a un archivo de js nativamente los reconoce como un "array",  se debe aplicar el metodo "parse" para que sean reconocidos como objetos
const jsonData = JSON.parse(publicaciones);
console.log(typeof jsonData);



//Aplicando un metodo filter sobre el objeto jsonData para validar el funcionamiento de los key:value a la hora de retornar informacion
/*const publicacionesCalif = jsonData.filter(
    (publicaciones) => publicaciones.calificacion > 4.5 && publicaciones.calificacion <= 5
);
console.log (publicacionesCalif); */

//Alertas en el llenado de campos necesarios
//No aplica aun para el: select class="form-select form-select-sm" aria-label="Small select example"  id="select--usuario"!!
const buttonPublicar = document.getElementById('buttton--publicar');
buttonPublicar.addEventListener('click', () => {

  var inputTipo = document.getElementById("select--usuario").value;
  //Aqui ya se extraen los valores de los inputs servicio y descripcion
  var inputServicio = document.getElementById("floatingTextarea1").value;
  var inputDescripcion = document.getElementById("floatingTextarea2").value;
  var inputArchivosAdjuntos = document.getElementById("archivo-input").value;
  if (inputTipo == "" || inputServicio == "" || inputDescripcion == "") {
    alert("Es necesario llenar el campo");
  } else {
    alert("Los campos han sido llenados correctamente");
  }

  //Con la informacion adquirida de los inputs se crea un objeto de javascript
  const publicacionesObject = {
    servicio: inputServicio,
    descripcion: inputDescripcion 

}
console.log (publicacionesObject);
});
console.log(publicacionesObject.json());
//fetch("./nuevasPublicaciones.json").then

/*
const fs = require('fs');
const nuevaPublicacion = JSON.stringify(publicacionesObject);
fs.writeFile('nuevasPublicaciones.json',nuevaPublicacion, (error)=>{
    if (error) throw error;
    console.log('Informacion recibida'); 

})  */
    
/* //JS para: obtener la fecha de manera automatica, de acuerdo al sistema del usuario.
    let mostrarFecha = document.getElementById('fecha');
    let hoy = new Date();

    let dia = hoy.getDate();
    let mes = hoy.getMonth()+1;
    let agnio = hoy.getFullYear();
    mostrarFecha.innerHTML = `${dia}/${mes}/${agnio}`; */ 
