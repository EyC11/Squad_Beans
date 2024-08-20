
// Validación Aparicio
// Función genérica para validar los campos de texto
const validarCampo = (inputId, spanId) => {
    const valor = document.getElementById(inputId).value.trim();
    const resultadoSpan = document.getElementById(spanId);
    const caracteres = /^[a-zA-Z\s]+$/;

    // Validación del campo vacío
    if (valor === "") {
        resultadoSpan.textContent = "El campo no puede estar vacío.";
        resultadoSpan.style.color = "#EE3A3A";
    }
    // Validación de solo letras y espacios
    else if (caracteres.test(valor)) {
        resultadoSpan.textContent = "Datos válidos";
        resultadoSpan.style.color = "#62CF3D";
    }
    // Mensaje de error si contiene caracteres no permitidos
    else {
        resultadoSpan.textContent = "Introduce caracteres válidos";
        resultadoSpan.style.color = "#EE3A3A";
    }
};

// Asignación de validaciones a eventos de input
//Nombre
document.getElementById('form-container--contenedor--grupo-datos--nombres').addEventListener('input', () => {
    validarCampo('form-container--contenedor--grupo-datos--nombres', 'nombre--contacto');
});
//Apellido
document.getElementById('form-container--contenedor--grupo-datos--apellidos').addEventListener('input', () => {
    validarCampo('form-container--contenedor--grupo-datos--apellidos', 'apellido--contacto');
});

// Validaciones específicas para nombre y apellido
function validacionNombre() {
    validarCampo('form-container--contenedor--grupo-datos--nombres', 'nombre--contacto');
}

function validacionApellido() {
    validarCampo('form-container--contenedor--grupo-datos--apellidos', 'apellido--contacto');
}


// Validacion Email Cris
function validacion2() {
    var emailC = document.getElementById("inputMail").value;
    var estadoE2 = document.getElementById("email--contacto");
    var requisitos2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (emailC.match(requisitos2)) {
        estadoE2.textContent = "Email válido";
        estadoE2.style.color = "#62CF3D";
    } else {
        estadoE2.textContent = "Introduzca un email válido";
        estadoE2.style.color = "#EE3A3A";
        // estadoE2.style.color = "#FFFFFF";
        // estadoE2.style.backgroundColor = '#FF0000';
        // estadoE2.style.borderRadius = '20px'
        // estadoE2.style.margin = '5px'
    }
}

//faltan funcion o check radius botones


/******************************************JSON ***********************/

//Evento para que una vez validados los inputs guarde todo en variables al pulsar registrarse
//const buttonRegistro = document.getElementById('registerForm');
//const buttonPublicar = document.addEventListener('click', () => {
    document.getElementById('form--contacto').addEventListener('submit', function (event) {
        event.preventDefault();//previniendo comportamiento por defento del formulario       
        //Adaptar variables de acuerdo a los inputs
    
        //Aqui ya se extraen los valores de los inputs del formulario
        var inputNombreContacto = document.getElementById("form-container--contenedor--grupo-datos--nombres").value;
        var inputApellidoContacto = document.getElementById("form-container--contenedor--grupo-datos--apellidos").value;
        var inputCorreoContacto = document.getElementById("inputMail").value;
        var inputUbicacionContacto = document.getElementById("form-container--contenedor--grupo-datos--ubicacion").value;
        var inputTopicoContacto = document.getElementById("form-container--contenedor--grupo-datos--topicos").value;
        var inputAyudaContacto = document.getElementById("form-container--contenedor--grupo-datos--Ayuda").value;
        
       
    
    
        //dia mes año errorP contrasena2 estado ciudad codigo--postal direccion 
    
        //Filtro final por si falta de llenar algun campo (se puede borrar)
        if (inputNombreContacto == "" || inputApellidoContacto == "" || inputCorreoContacto == "" || inputUbicacionContacto == "" || inputTopicoContacto == "" || inputAyudaContacto == "" ) {
            alert("Es necesario llenar el campo");
        } else {
            alert("Los campos han sido llenados correctamente");
        }
    
        //Con la informacion adquirida de los inputs se crea un objeto JSON de javascript
        const contactoObject = {
            nombreC: inputNombreContacto,
            apellidoC: inputApellidoContacto,
            correoC: inputCorreoContacto,
            ubicacion: inputUbicacionContacto,
            topicoC: inputTopicoContacto,
            ayudaC: inputAyudaContacto
            //falta agregar boolean botones
            
    
        };
    
        //Muestra el objeto creado en consola se guarda solamente en la sesionStorage
        console.log('Objeto JSON:', JSON.stringify(contactoObject));
    
    
    });