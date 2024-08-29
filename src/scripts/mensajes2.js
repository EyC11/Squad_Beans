// Función que se llama al hacer clic en el botón
function enviarMensaje() {
    const mensajeInput = document.getElementById('mensajeInput');
    const mensaje = mensajeInput.value.trim();

    if (mensaje !== '') {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.classList.add('mensaje-div');

        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;
        nuevoMensaje.classList.add('mensajes--style');

        mensajeDiv.appendChild(nuevoMensaje);

        const contenedorMensajes = document.getElementById('mensajeContainer');
        contenedorMensajes.appendChild(mensajeDiv);

        // Guardar el mensaje en el localStorage
        guardarMensaje(mensaje);

        mensajeInput.value = '';
        contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
    }
}

function guardarMensaje(mensaje) {
    let mensajes = JSON.parse(localStorage.getItem('mensajes')) || {};
    let mensajesIx = Object.keys(mensajes).length + 1;
    mensajes[`mensaje${mensajesIx}`] = mensaje;
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
}

// Recuperar y mostrar mensajes al cargar la página
window.addEventListener('load', function() {
    const contenedorMensajes = document.getElementById('mensajeContainer');
    const mensajes = JSON.parse(localStorage.getItem('mensajes')) || {};

    Object.keys(mensajes).forEach(function(key) {
        const mensaje = mensajes[key];
        if (mensaje) {
            const mensajeDiv = document.createElement('div');
            mensajeDiv.classList.add('mensaje-div');

            const nuevoMensaje = document.createElement('p');
            nuevoMensaje.textContent = mensaje;
            nuevoMensaje.classList.add('mensajes--style');

            mensajeDiv.appendChild(nuevoMensaje);
            contenedorMensajes.appendChild(mensajeDiv);
        }
    });

    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
});

// Asociar la función al clic del botón
document.getElementById('enviarMensaje').addEventListener('click', enviarMensaje);

// Asociar la función al presionar Enter en el campo de texto
document.getElementById('mensajeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita el salto de línea en el campo de texto
        enviarMensaje(); // Llama a la función de enviar mensaje
    }
});
