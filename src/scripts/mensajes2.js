let chatActual = 'gabriel'; // Chat predeterminado al cargar la página

// Datos de los chats (nombre y foto)
const chatDatos = {
    gabriel: { nombre: 'Gabriel Gómez', foto: '../../public/assets/jardineroGabriel.jpg' },
    carpintero: { nombre: 'María López', foto: '../../public/assets/carpintero.jfif' },
    limpieza: { nombre: 'Juan Pérez', foto: '../../public/assets/Limpieza.jfif' },
    jardinero2: { nombre: 'Ana Torres', foto: '../../public/assets/publicaciones/albañill.jpeg' },
    carpintero2: { nombre: 'Luis Hernández', foto: '../../public/assets/carpintero.jfif' },
    limpieza2: { nombre: 'Laura González', foto: '../../public/assets/cocinera.jpg' }
};

function enviarMensaje() {
    const mensajeInput = document.getElementById('mensajeInput');
    const mensaje = mensajeInput.value.trim();

    if (mensaje !== '' && chatActual !== '') {
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
    let chatMensajes = mensajes[chatActual] || [];
    chatMensajes.push(mensaje);
    mensajes[chatActual] = chatMensajes;
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
}

function recuperarMensajes() {
    const contenedorMensajes = document.getElementById('mensajeContainer');
    const mensajes = JSON.parse(localStorage.getItem('mensajes')) || {};

    // Limpiar contenedor
    contenedorMensajes.innerHTML = '';

    const chatMensajes = mensajes[chatActual] || [];
    chatMensajes.forEach(function(mensaje) {
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
}

function actualizarHeader() {
    const header = chatDatos[chatActual];
    if (header) {
        document.getElementById('perfilImg').src = header.foto;
        document.getElementById('nombre-Usuario').textContent = header.nombre;
    }
}

function seleccionarChatPredeterminado() {
    const chatElement = document.querySelector(`.chat[data-chat="${chatActual}"]`);
    if (chatElement) {
        chatElement.click(); // Simula un clic en el chat predeterminado
    }
}

window.addEventListener('load', function() {
    // Recuperar mensajes del chat actual
    recuperarMensajes();
    actualizarHeader();
    seleccionarChatPredeterminado(); // Seleccionar el chat predeterminado al cargar
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

// Manejar el clic en los chats
document.getElementById('chatsContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('chat') || event.target.closest('.chat')) {
        const chat = event.target.closest('.chat');
        chatActual = chat.getAttribute('data-chat');
        recuperarMensajes(); // Recuperar mensajes del chat seleccionado
        actualizarHeader(); // Actualizar información del chat
    }
});
