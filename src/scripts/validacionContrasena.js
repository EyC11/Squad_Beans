
const $confirmar = document.getElementById("contrasena2")
const $error1 = document.getElementById("errorP")
//console.log($constrasenia);
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


// Seleccionar elementos específicos
const inputEl = document.querySelector("#contrasena");
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