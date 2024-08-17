// Validacion Email Cris
function validacion() {
    var email = document.getElementById("email").value;
    var estadoE = document.getElementById("email-estado");
    var requisitos = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (email.match(requisitos)) {
        estadoE.textContent = "Email válido";
        estadoE.style.color = "#62CF3D";
    } else {
        estadoE.textContent = "Introduzca un email válido";
        estadoE.style.color = "#EE3A3A";
    }
}



function validacionTelefono() {
    var inputTelefono = document.getElementById('tel').value;
    var resultado = document.getElementById('telefono-estado');
    var requiredTelefono = /[0-9]{10}$/;

    if (inputTelefono.match(requiredTelefono)) {
        resultado.textContent = "Telefono valido";
        resultado.style.color = "#62CF3D";
    } else {
        resultado.textContent = "Introduce un telefono valido";
        resultado.style.color = "#EE3A3A";
    }

}

function validacionCodigoPostal() {
    var inputCodePostal = document.getElementById('codigo--postal').value;
    var resultadoCP = document.getElementById('codigo--postal-estado');
    var requiredCodePostal = /[0-9]{5}$/;

    if (inputCodePostal.match(requiredCodePostal)) {
        resultadoCP.textContent = "Código Postal valido";
        resultadoCP.style.color = "#62CF3D";
    } else {
        resultadoCP.textContent = "Introduce tu código postal";
        resultadoCP.style.color = "#EE3A3A";
    }

}

/*
<div clase="col">
<label for="teléfono">Número de Teléfono:</label>
<input id="tel" type="tel" onkeyup="validacionTelefono()" placeholder="Escribe tu número de teléfono" minlength="10" maxlength="10" required>
<span id="telefono-estado"></span>
 </div>

<label for="cp">Código postal</label> <br>
<input id="codigo--postal" type="text" placeholder="Escribe tu código postal" required> 
<span id="codigo--postal-estado"></span>
*/


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
document.getElementById('nombreInput').addEventListener('input', () => {
    validarCampo('nombreInput', 'nombreSpan');
});

document.getElementById('apellidoInput').addEventListener('input', () => {
    validarCampo('apellidoInput', 'apellidoSpan');
});

// Validaciones específicas para nombre y apellido
function validacionNombre() {
    validarCampo('nombreInput', 'nombreSpan');
}

function validacionApellido() {
    validarCampo('apellidoInput', 'apellidoSpan');
}



//Validacion de teléfono Emilio 
/*const inputTelefono = document.getElementById('tel');
const verificarBoton = document.getElementById('revisar');
const resultado = document.getElementById('telefono-estado');
verificarBoton.addEventListener('click', function(){
    const numero =inputTelefono.value;// borra
    if (/^\d{10}$/.test(numero)){
        // alert('Numero Valido');
        resultado.textContent = 'El numero es valido';
        resultado.style.color ='yellow';
    } else {
       // alert('Error');
        resultado.textContent = 'El numero no es valido';
        resultado.style.color ='red';
    }
});*/
/*
inputTelefono.addEventListener("submit",validarTelefono);
let largoMax = /^\d{10}$/;
longitud = () =>{
if (/^\d{10}$/==inputTelefono){
alert("Telefono valido")
} else {
    alert("Telefono  no valido")    
}
}

if (NaN(telefono)){

}

const expresiones = {
    telefono: /^\d{10}$/ //10 numeros
}

function validarTelefono (parametro) {
if(!/^([0-9])*$/.test(parametro)){
    return false;
    console.log("Hols");
   } else {
    return true; 
    alert(" no hola");
   }
}
*/





//Evento para que una vez validados los inputs guarde todo en variables al pulsar registrarse
const buttonRegistro = document.getElementById('revisar');
const buttonPublicar = document.addEventListener('click', () => {
    //Adaptar variables de acuerdo a los inputs
    
    //Aqui ya se extraen los valores de los inputs
    var inputNombre = document.getElementById("nombreInput").value;
    var inputApellido = document.getElementById("apellidoInput").value;
    var inputCorreo = document.getElementById("email").value;
    var inputTelefono = document.getElementById("tel").value;
    var inputDia = document.getElementById("dia").value;
    var inputMes = document.getElementById("mes").value;
    var inputAño = document.getElementById("año").value;
    var inputContraseña = document.getElementById("contrasena");
    var inputEstado = document.getElementById("estado").value;
    var inputCuidad = document.getElementById("cuidad").value;
    var inputCodigoPostal = document.getElementById("codigo--postal").value;
    var inputDireccion = document.getElementById("direccion").value;


    //dia mes año errorP contrasena2 estado ciudad codigo--postal direccion 

    //Filtro final por si falta de llenar algun campo (se puede borrar)
    if (inputNombre == " " || inputApellido == "" || inputCorreo == "" || inputTelefono == ""|| inputDia == ""|| inputMes == ""|| inputAño == ""|| inputContraseña == ""|| inputEstado == "" || inputCuidad == ""|| inputCodigoPostal == ""|| inputDireccion == "") {
        alert("Es necesario llenar el campo");
    } else {
        alert("Los campos han sido llenados correctamente");
    }

    //Con la informacion adquirida de los inputs se crea un objeto de javascript
    const registrosObject = {
        nombre: inputNombre,
        apellido: inputApellido,
        correo: inputCorreo,
        contraseña: inputContraseña,
        telefono: inputTelefono,
        dia: inputDia,
        mes: inputMes,
        año: inputAño,
        contraseña: inputContraseña,
        estado: inputEstado,
        cuidad: inputCuidad,
        codigopostal: inputCodigoPostal,
        direccion: inputDireccion



    }
    //Muestra el objeto creado en consola se guarda solamente en la sesionStorage
    console.log(publicacionesObject);
});

