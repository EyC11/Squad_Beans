
// Datos de los chats (nombre y foto)
const chatDatos = {
    gabriel: { 
        nombre: 'Gabriel ', 
        foto: '../../public/assets/jardineroGabriel.jpg',
        servicio: 'Jardinería',
        puntuacion: '4.8/5'
    },
    maria: { 
        nombre: 'María ', 
        foto: '../../public/assets/carpintero.jfif',
        servicio: 'Carpintería',
        puntuacion: '4.7/5'
    },
    juan: { 
        nombre: 'Juan ', 
        foto: '../../public/assets/Limpieza.jfif',
        servicio: 'Limpieza',
        puntuacion: '4.6/5'
    },
    ana: { 
        nombre: 'Ana ', 
        foto: '../../public/assets/publicaciones/albañill.jpeg',
        servicio: 'Albañilería',
        puntuacion: '4.5/5'
    },
    luis: { 
        nombre: 'Luis ', 
        foto: '../../public/assets/carpintero.jfif',
        servicio: 'Carpintería',
        puntuacion: '4.7/5'
    },
    laura: { 
        nombre: 'Laura ', 
        foto: '../../public/assets/cocinera.jpg',
        servicio: 'Cocina',
        puntuacion: '4.9/5'
    }
};

// Mantendremos un registro del chat actual y guardaremos el chat en localStorage
let chatActual = localStorage.getItem('chatActual') || ''; // Recuperar el último chat seleccionado


// Función para manejar la selección de un chat
document.getElementById('chatsContainer').addEventListener('click', function(event) {
    const chat = event.target.closest('.chat');
    if (chat) {
        chatActual = Object.keys(chatDatos)[parseInt(chat.getAttribute('data-chat').replace('chat', '')) - 1];
        localStorage.setItem('chatActual', chatActual); // Guardar el chat actual en localStorage
        recuperarMensajes();
        actualizarHeader();
    }
});

// Función para recuperar y mostrar el último chat seleccionado al cargar la página
window.addEventListener('load', function() {
    insertarChats();

    // Verificar si hay un chat guardado y actualizar la interfaz con él
    if (chatActual) {
        recuperarMensajes();
        actualizarHeader();
    } else {
        // Si no hay chat guardado, puedes seleccionar el primero por defecto
        chatActual = Object.keys(chatDatos)[0]; 
        localStorage.setItem('chatActual', chatActual);
        recuperarMensajes();
        actualizarHeader();
    }
});


// Función para insertar los chats en el contenedor
function insertarChats() {
    const chatsContainer = document.getElementById('chatsContainer');
    chatsContainer.innerHTML = ''; // Limpiamos el contenedor antes de insertar

    // Obtenemos el orden de los chats del localStorage, si está disponible
    let ordenChats = JSON.parse(localStorage.getItem('ordenChats')) || Object.keys(chatDatos);

    // Recorremos el orden de los chats
    ordenChats.forEach((usuario, index) => {
        const chatInfo = chatDatos[usuario];

        // Creamos el elemento div para el chat
        const chatDiv = document.createElement('div');
        chatDiv.classList.add('chat');
        chatDiv.setAttribute('data-chat', `chat${index + 1}`);

        // Imagen de perfil
        const img = document.createElement('img');
        img.src = chatInfo.foto;
        img.alt = `Perfil ${index + 1}`;
        img.classList.add('perfil-img');

        // Información del chat
        const chatInfoDiv = document.createElement('div');
        chatInfoDiv.classList.add('chat-info');

        // Fila con nombre y trabajo/servicio
        const chatRowDiv = document.createElement('div');
        chatRowDiv.classList.add('chat-row');

        const nombreUsuarioP = document.createElement('p');
        nombreUsuarioP.classList.add('nombre-usuario');
        nombreUsuarioP.textContent = chatInfo.nombre;

        const trabajoDiv = document.createElement('div');
        trabajoDiv.classList.add('trabajo');
        const trabajoP = document.createElement('p');
        trabajoP.classList.add('trabajo-usuario');
        trabajoP.textContent = chatInfo.servicio;

        // Agregamos trabajo dentro de su div
        trabajoDiv.appendChild(trabajoP);
        chatRowDiv.appendChild(nombreUsuarioP);
        chatRowDiv.appendChild(trabajoDiv);

        // Último mensaje o calificación
        const ultimoMensajeP = document.createElement('p');
        ultimoMensajeP.classList.add('ultimo-mensaje');

        // Obtener mensajes del localStorage
        const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes')) || {};

        // Buscar el último mensaje del chat actual
        const mensajesDelChat = mensajesGuardados[usuario] || [];
        let ultimoMensaje = mensajesDelChat.length > 0 ? mensajesDelChat[mensajesDelChat.length - 1] : '...';

        // Limitar el mensaje a 25 caracteres
        ultimoMensaje = ultimoMensaje.length > 25 ? ultimoMensaje.substring(0, 25) + '...' : ultimoMensaje;

        ultimoMensajeP.textContent = ultimoMensaje;



        chatInfoDiv.appendChild(chatRowDiv);
        chatInfoDiv.appendChild(ultimoMensajeP);

        chatDiv.appendChild(img);
        chatDiv.appendChild(chatInfoDiv);

        chatsContainer.appendChild(chatDiv);
    });
}

// Función para mover el chat a la parte superior
function moverChat(chatKey) {
    let ordenChats = JSON.parse(localStorage.getItem('ordenChats')) || Object.keys(chatDatos);

    // Reordenar chats: ponemos el chat seleccionado al principio
    ordenChats = [chatKey, ...ordenChats.filter(chat => chat !== chatKey)];

    // Guardamos el nuevo orden en localStorage
    localStorage.setItem('ordenChats', JSON.stringify(ordenChats));

    // Volvemos a insertar los chats en el orden actualizado
    insertarChats();
}

// Función para enviar un mensaje
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

        // Mover el chat actual a la parte superior
        moverChat(chatActual);
    }
}

// Guardar el mensaje en localStorage
function guardarMensaje(mensaje) {
    let mensajes = JSON.parse(localStorage.getItem('mensajes')) || {};
    let chatMensajes = mensajes[chatActual] || [];
    chatMensajes.push(mensaje);
    mensajes[chatActual] = chatMensajes;
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
}

// Función para recuperar mensajes de localStorage
function recuperarMensajes() {
    const contenedorMensajes = document.getElementById('mensajeContainer');
    const mensajes = JSON.parse(localStorage.getItem('mensajes')) || {};

    contenedorMensajes.innerHTML = '';

    const chatMensajes = mensajes[chatActual] || [];
    chatMensajes.forEach(mensaje => {
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

// Función para actualizar el header con el perfil del chat actual
function actualizarHeader() {
    const header = chatDatos[chatActual];
    if (header) {
        document.getElementById('perfilImg').src = header.foto;
        document.getElementById('nombre-Usuario').textContent = header.nombre;
    }
}

// Manejo de la selección de un chat
document.getElementById('chatsContainer').addEventListener('click', function(event) {
    const chat = event.target.closest('.chat');
    if (chat) {
        chatActual = Object.keys(chatDatos)[parseInt(chat.getAttribute('data-chat').replace('chat', '')) - 1];
        recuperarMensajes();
        actualizarHeader();
    }
});

// Al cargar la página
window.addEventListener('load', function() {
    insertarChats();
    if (chatActual) {
        recuperarMensajes();
        actualizarHeader();
    }
});

// Asociar la función al clic del botón de enviar
document.getElementById('enviarMensaje').addEventListener('click', enviarMensaje);

// Asociar la función al presionar "Enter" en el campo de entrada
document.getElementById('mensajeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el salto de línea
        enviarMensaje(); // Llamar a la función para enviar el mensaje
    }
});


