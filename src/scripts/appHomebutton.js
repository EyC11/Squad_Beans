// Acceder a los elementos que voy a manipular (botón y el div container)
const input = document.getElementById('button--card');
const container = document.getElementById('formulario--publicacion');

// Agregar estilos para visibilidad
container.style.visibility = 'hidden';

// Manejar eventos para ocultar el container desde el botón
input.addEventListener('click', () => {
    container.style.visibility = (container.style.visibility === 'visible') ? 'hidden' : 'visible'; 
});