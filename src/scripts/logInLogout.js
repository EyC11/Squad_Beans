function toggleLogin() {
    const button = document.getElementById('loginBtn');
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        // Cambia el texto del botón a "Iniciar Sesión"
        localStorage.setItem('isLoggedIn', 'false');
        button.textContent = "Iniciar Sesión";
        window.location.href = "landing.html";
    } else {
        // Cambia el texto del botón a "Cerrar Sesión"
        localStorage.setItem('isLoggedIn', 'true');
        button.textContent = "Cerrar Sesión";
        // Redirige a la página de login
        window.location.href = "home.html";
    }
}

// Al cargar la página, establecer el texto del botón basado en el estado de sesión
document.addEventListener('DOMContentLoaded', () => {
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const button = document.getElementById('loginBtn');
    
    if (isLoggedIn) {
        button.textContent = "Cerrar Sesión";
    } else {
        button.textContent = "Iniciar Sesión";
    }
});
