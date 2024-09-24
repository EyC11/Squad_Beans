//JS para: obtener la fecha de manera automatica, de acuerdo al sistema del usuario.
const mostrarFecha = document.getElementById('fecha');
const hoy = new Date();

const dia = hoy.getDate();
const mes = hoy.getMonth()+1;
const agnio = hoy.getFullYear();
mostrarFecha.innerHTML = `${dia}/${mes}/${agnio}`;

// Mostrar formulario al hacer clic en el botón de publicación
document.getElementById('buttton--publicar').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.container--publicacion').style.display = 'block';
});

// Función para guardar la publicación
document.getElementById('buttton--publicar').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const textContent = document.getElementById('floatingTextarea2').value;
    const category = document.getElementById('select--usuario').value;
    const date = new Date().toLocaleString();
    const location = "CDMX"; // Cambia esto si el valor es dinámico

    if (!textContent) {
        alert("Por favor, escribe algo para publicar.");
        return;
    }

    const post = {
        content: textContent,
        category: category,
        date: date,
        location: location
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();

    // Limpiar el formulario
    document.getElementById('floatingTextarea2').value = '';
    document.getElementById('select--usuario').value = '';
});

// Función para mostrar publicaciones desde el local storage
function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.querySelector('.container--publicacion .row');
    postsContainer.innerHTML = '';  // Limpia el contenedor antes de agregar las publicaciones
    const user = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogin = user.find(usuario => usuario.login === 'in');
    const postElement = document.createElement('div');

    posts.forEach(post => {
      
        postElement.classList.add('col');
        postElement.innerHTML = `
            <div class="post-container">
                <div class="post-header">
                    <div class="post-icon">
                        <img src="../../public/assets/user.png" alt="icon">
                    </div>
                    <div class="post-info">
                        <h4> Albañilería </h4>  
                        <p> ${usuarioLogin.nombre} ${usuarioLogin.apellido}  4.0 ★</p>
                        <p>${post.location} - ${post.date}</p>
                    </div>
                </div>
                <div class="post-body">
                    <p>${post.content}</p>
                    <img src="../../public/assets/publicaciones/publicacion-prueba.jpg" alt="post-image">
                </div>
                <div class="post-footer">
                    <button class="reaccion--btn--ikonik">iKonik</button>
                    <button class="reaccion--btn--comentar">Comentar</button>
                    <button class="reaccion--btn--compartir">Compartir</button>
                </div>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}



// Mostrar las publicaciones cuando la página cargue
document.addEventListener('DOMContentLoaded', displayPosts);
