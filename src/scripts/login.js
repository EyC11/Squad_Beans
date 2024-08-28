
// Seleccionar elementos específicos
const inputEl = document.querySelector("#password");
const showEl = document.querySelector("#toggle-password");
const hideEl = document.querySelector("#toggle-password-hide");

// Mostrar contraseña
showEl.addEventListener("click", () => {
    inputEl.type = "text"; // Cambiar el tipo a "text" para mostrar la contraseña
    hideEl.classList.remove("hide"); // Mostrar el ícono de "ojo cerrado"
    showEl.classList.add("hide"); // Ocultar el ícono de "ojo abierto"
});

// Ocultar contraseña
hideEl.addEventListener("click", () => {
    inputEl.type = "password"; // Cambiar el tipo a "password" para ocultar la contraseña
    hideEl.classList.add("hide"); // Ocultar el ícono de "ojo cerrado"
    showEl.classList.remove("hide"); // Mostrar el ícono de "ojo abierto"
});


/** LocalStorage. Permite almacenar datos en la memoria local mediante la Storage API. */

// Crear constantes para los formularios
const inicioFormulario = document.querySelector('#loginForm');

// Creando evento para formulario que me permite iniciar sesión con la información almacenada en localStorage
inicioFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    // Guardar los inputs en constantes

    const emailInput = document.getElementById('email').value;
    const contrasenaInput = document.getElementById('password').value;

    // Obtener los valores del localStorage
    // Sintaxis: localStorage.getItem('nombreItem');
    /* const getUsername = localStorage.getItem('email');
    const getPassword = localStorage.getItem('contrasena'); */
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Validar mediante sentencias condicionales si el usuario existe en localStorage

    const usuarioValido = usuarios.find(usuario => 
        usuario.email === emailInput && usuario.contrasena === contrasenaInput
    );
    
    if (usuarioValido) {
        alert(`Bienvenide ${usuarioValido.nombreInput}, inicio de sesión exitoso`);
        inicioFormulario.reset();
        
    } else {
        alert('Usuario o contraseña incorrecto');
    }



window.location.href = 'home.html'




});


