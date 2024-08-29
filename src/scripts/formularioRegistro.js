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

//------------------------------------------------------
function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordValidation = document.getElementById('password-validation');

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLengthValid = password.length >= 8;
    const isLengthValid2 = password.length <= 15 ;


    let message = '';
    if ((!hasUppercase)||(!hasNumber)||(!(isLengthValid && isLengthValid2))){
         message += 'Debe contener al menos una letra mayúscula un numero y entre 8 y15 caracteres ';
         // Cambiar el color del texto a rojo
        passwordValidation.style.color = '#EE3A3A';
    }else{
        message+="Contraseña correcta"
        passwordValidation.style.color = '#62CF3D';

    }
    
    
    passwordValidation.textContent = message;

    if (password === '') {
        passwordValidation.textContent = 'Este campo no puede estar vacío.';
        return;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const confirmPasswordValidation = document.getElementById('confirm-password-validation');

    
    
    if (password !== confirmPassword) {
        confirmPasswordValidation.textContent = 'Las contraseñas no coinciden.';
         // Cambiar el color del texto a rojo
         confirmPasswordValidation.style.color = '#EE3A3A';
    } else {
        confirmPasswordValidation.textContent = ' Las contraseñas coinciden';
        confirmPasswordValidation.style.color = '#62CF3D';
        
    }

}

document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirm-password').addEventListener('input', validateConfirmPassword);




//-------------------------------------------------








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


//Evento para que una vez validados los inputs guarde todo en variables al pulsar registrarse
//const buttonRegistro = document.getElementById('registerForm');
//const buttonPublicar = document.addEventListener('click', () => {
document.getElementById('registerForm').addEventListener('submit', function (event) {
    //event.preventDefault();//previniendo comportamiento por defento del formulario       
    //Adaptar variables de acuerdo a los inputs

    //Aqui ya se extraen los valores de los inputs del formulario
    var inputNombre = document.getElementById("nombreInput").value;
    var inputApellido = document.getElementById("apellidoInput").value;
    var inputCorreo = document.getElementById("email").value;
    var inputTelefono = document.getElementById("tel").value;
    var inputDia = document.getElementById("dia").value;
    var inputMes = document.getElementById("mes").value;
    var inputAnio = document.getElementById("año").value;
    var inputContrasenia = document.getElementById("password").value;
    var inputValidarContrasenia = document.getElementById("confirm-password").value;
    var inputEstado = document.getElementById("estado").value;
    var inputCuidad = document.getElementById("ciudad").value;
    var inputCodigoPostal = document.getElementById("codigo--postal").value;
    var inputDireccion = document.getElementById("direccion").value;


    //dia mes año errorP contrasena2 estado ciudad codigo--postal direccion 

    //Filtro final por si falta de llenar algun campo (se puede borrar)
    if (inputNombre == "" || inputApellido == "" || inputCorreo == "" || inputTelefono == "" || inputDia == "" || inputMes == "" || inputAnio == "" || inputContrasenia == "" || inputValidarContrasenia == "" || inputEstado == "" || inputCuidad == "" || inputCodigoPostal == "" || inputDireccion == "") {
        alert("Es necesario llenar el campo");
    } else {
        alert("Los campos han sido llenados correctamente");
    }

   


});

//Valores de los inputs correo y contraseña guardados en el LocalStorage para el inicio de sesion
const registroFormulario = document.querySelector('#registerForm');

//--- Creando evento en formulario para Registrar nuevos Usuarios
registroFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    // Guardar los inputs en constantes
    const nombreUsuario = document.getElementById("nombreInput").value;
    const nombreEmail = document.getElementById("email").value;
    const nuevoPassword = document.getElementById('password').value;

    // Guardamos los valores de los inputs en el almacenamiento local (Local Storage)
    // Sintaxis para guardarlos: localStorage.setItem("nombreItem", valor);
    // localStorage(key-value)
    /* localStorage.setItem("email", nombreEmail);
    localStorage.setItem("contrasena", nuevoPassword); */
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push({nombre:nombreUsuario,email:nombreEmail, contrasena:nuevoPassword, login:"out", status: "free"});
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    alert('Registro exitoso!!!');

    registroFormulario.reset();
    window.location.href = 'login.html'
});


//  Mostrar ocultar contraseña

// Seleccionar los elementos
const togglePassword = document.getElementById('toggle-password');
const togglePasswordHide = document.getElementById('toggle-password-hide');
const passwordField = document.getElementById('password');

const togglePassword2 = document.getElementById('toggle-password2');
const togglePasswordHide2 = document.getElementById('toggle-password-hide2');
const passwordField2 = document.getElementById('confirm-password');

// Función para mostrar/ocultar contraseña
const toggleVisibility = (field, showIcon, hideIcon) => {
    if (field.type === 'password') {
        field.type = 'text';
        showIcon.classList.add('hide');
        hideIcon.classList.remove('hide');
    } else {
        field.type = 'password';
        hideIcon.classList.add('hide');
        showIcon.classList.remove('hide');
    }
};

// Agregar eventos de clic para cambiar la visibilidad
togglePassword.addEventListener('click', () => toggleVisibility(passwordField, togglePassword, togglePasswordHide));
togglePasswordHide.addEventListener('click', () => toggleVisibility(passwordField, togglePassword, togglePasswordHide));

togglePassword2.addEventListener('click', () => toggleVisibility(passwordField2, togglePassword2, togglePasswordHide2));
togglePasswordHide2.addEventListener('click', () => toggleVisibility(passwordField2, togglePassword2, togglePasswordHide2));



