//  Mostrar ocultar contraseñas mediante íconos de ojos  Edgar

// Seleccionar los id de los inputs de contraseñas 
const togglePassword = document.getElementById('toggle-password');
const togglePasswordHide = document.getElementById('toggle-password-hide');
const passwordField = document.getElementById('password');

const togglePassword2 = document.getElementById('toggle-password2');
const togglePasswordHide2 = document.getElementById('toggle-password-hide2');
const passwordField2 = document.getElementById('confirm-password');

// Función para mostrar/ocultar contraseñas
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

// Agregar eventos de clic para cambiar la visibilidad de las contraseñas
togglePassword.addEventListener('click', () => toggleVisibility(passwordField, togglePassword, togglePasswordHide));
togglePasswordHide.addEventListener('click', () => toggleVisibility(passwordField, togglePassword, togglePasswordHide));

togglePassword2.addEventListener('click', () => toggleVisibility(passwordField2, togglePassword2, togglePasswordHide2));
togglePasswordHide2.addEventListener('click', () => toggleVisibility(passwordField2, togglePassword2, togglePasswordHide2));