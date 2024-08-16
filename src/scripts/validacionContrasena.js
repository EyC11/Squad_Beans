
const $confirmar = document.getElementById("contrasena2")
const $error1 = document.getElementById("errorP")
console.log($constrasenia);
console.log($confirmar);
console.log($error1);

function validarcontraseña() {
    const $constrasenia = document.getElementById("contrasena").value;
    const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    
    if (regex.test($constrasenia)) {
        $error1.textContent = 'La contraseña es válida.';
        $error1.style.color = 'green';
    } else {
        $error1.textContent = 'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números.';
        $error1.style.color = 'red';
    }
}

/**/

function comparacionContraseñas() {
    const $constraseniat = document.getElementById("contrasena").value;
    const $constraseniag = document.getElementById("contrasena2").value;


}



/*Plantilla Daniel*/
/** LocalStorage. Permite almacenar datos en la memoria local mediante la Storage API. */

// Crear constantes para los formularios
const registroFormulario = document.querySelector('#registerForm');


//--- Creando evento en formulario para Registrar nuevos Usuarios
registroFormulario.addEventListener('submit', () => {

    // Guardar los inputs en constantes
    const nuevoUsuario = document.getElementById('email').value;
    const nuevoPassword = document.getElementById('contrasena').value;

    

    // Guardamos los valores de los inputs en el almacenamiento local (Local Storage)
    // Sintaxis para guardarlos: localStorage.setItem("nombreItem", valor);
    // localStorage(key-value)
    localStorage.setItem("email", nuevoUsuario);
    localStorage.setItem("contrasena", nuevoPassword);

    alert('Registro exitoso!!!');

    registroFormulario.reset();

});

/* Esto es para inicio de sesion
// Creando evento para formulario que me permite iniciar sesión con la información almacenada en localStorage
inicioFormulario.addEventListener('submit', () => {

    // Guardar los inputs en constantes
    const usuario = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Obtener los valores del localStorage
    // Sintaxis: localStorage.getItem('nombreItem');
    const getUsername = localStorage.getItem('username');
    const getPassword = localStorage.getItem('password');

    // Validar mediante sentencias condicionales si el usuario existe en localStorage
    if(usuario === getUsername && password === getPassword) {
        alert(`Bienvenido ${getUsername}, inicio de sesión exitoso`);
        inicioFormulario.reset();
    } else {
        alert(`Usuario o contraseña incorrecto`);
    }
});*/

/*/** Expresiones regulares (Regex)
 
Patrones de caracteres que se deben cumplir para realizar una acción.
Podemos validad expresiones regulares en cualquier lenguaje de programación
*/

// Crear regex para un correo con la forma email @gmail.com que puede recibir cualquier letra mayúscula o minúscula, cualquier número y los caracteres .-_*
//const emailRegex = /^[a-zA-Z0-9._*-]+@gmail.com$/;

// Mando a llamar el input para poder evaluarlo y cumplir con la regex
//const emailInput = document.getElementById('email');

// Crear un evento para el input, el cual va a evaluar el patrónx regex y en caso de cumplir con el patrón el botón se habilitará.

// emailInput.addEventListener('input', (event) => {
   // const email = event.target.value;

    // Sentencia condicional para evaluar el valor del input, si se cumple se habilita el botón, en caso contrario, sigue deshabilitado
    /*if(emailRegex.test(email) === true) {
        buttonLogin.disabled = false;
    } else {
        buttonLogin.disabled = true;
    }
});*/
