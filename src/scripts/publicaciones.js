document.addEventListener("DOMContentLoaded", function() {
    // JS para: validar el formulario
    function validacionForm (event) {
        event.preventDefault ();

        let esValido = true;

    // JS para: Validar selección de Cliente - Provedor
    const clienteProvedorSelect = document.getElementById("container--head--Cliente-Provedor");
    if (clienteProvedorSelect.value == "servicio") {
        alert("Por favor, selecciona una opción válida en el campo 'Nombre'.");
        esValido = false;
    }
    }
}


)



function SelectOn() {
    var CoP = document.getElementById('container--head--Cliente-Provedor--Select');
    var opcion = CoP.selectedIndex;
    alert("se elije el value: " + opcion);
}





    //JS para: obtener la fecha de manera automatica, de acuerdo al sistema del usuario.
        let mostrarFecha = document.getElementById('fecha');
        let hoy = new Date();

        let dia = hoy.getDate();
        let mes = hoy.getMonth()+1;
        let agnio = hoy.getFullYear();
        mostrarFecha.innerHTML = `${dia}/${mes}/${agnio}`;

        
//Js para:  Botones uno de likes es un contador al parecer  gracias lo checo ):

let ikonik= document.getElementsByClassName('container-bonotones--boton--formulario--ikonik'); // boton 
let cuentaLikes = document.getElementById('contador');// span      
let cuentaIncremento =0;
cuentaLikes.textContent= 0;
 ikonik.onclick= function (){
    //  cuentaLikes.innerHTML++;
     cuentaIncremento++;
    cuentaLikes.textContent = cuentaIncremento;
 }
    
//  ikonik.addEventListener('click',cuenta);


// button = document.getElementsByClassName('container-bonotones--boton--formulario--ikonik');
// span = document.getElementsByClassName('contador');
// function increment (){
//     span.innerHTML++;

// }
// button.addEventListener('click',increment);



 /*Js para: ubicación*/
 document.addEventListener("DOMContentLoaded", function() {
    const ubicacionSelect = document.getElementById("container-bonotones--boton--formulario--ikonik");

 }


)

// Js para que aparezca el nombre en automatico cuando de click en el cuadro de nombre

  // Guardar el nombre en el almacenamiento local
  localStorage.setItem('nombre', nombre);
  
  // Agrega nombre al formulario de publicación
publicacionForm.addEventListener('DOMContentLoaded', function() {
    const nombre = localStorage.getItem('nombre');
    if (nombre) {
      nombrePublicadorSpan.textContent = nombre;
    }
  })
  