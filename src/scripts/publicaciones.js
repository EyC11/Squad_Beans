document.addEventListener("DOMContentLoaded", function() {
    // Función para validar el formulario
    function validacionForm (event) {
        event.preventDefault ();

        let esValido = true;

    // Validar selección de Cliente - Provedor
    const clienteProvedorSelect = document.getElementById("container--head--Cliente--Provedor");
    if (clienteProvedorSelect.value === "selecion") {
        alert("Por favor, selecciona una opción válida en el campo 'Nombre'.");
        esValido = false;
    }
    }
} 

)

//JS para obtener la fecha de manera automatica, de acuerdo al sistema del usuario.
        let mostrarFecha = document.getElementById('fecha');
        let hoy = new Date();

        let dia = hoy.getDate();
        let mes = hoy.getMonth()+1;
        let agnio = hoy.getFullYear();
        mostrarFecha.innerHTML = `${dia}/${mes}/${agnio}`;



let ikonik= document.getElementsByClassName('container-bonotones--boton--formulario--ikonik');
let cuentaLikes = document.getElementById('contador');      
 function cuenta {
    cuentaLikes.innerHTML++

 }       
 ikonik.addEventListener('click',cuenta);