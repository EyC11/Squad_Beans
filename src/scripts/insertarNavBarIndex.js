function actualizarElementosSegunSesion() {
    // Obtén el array de usuarios desde el localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Verifica si algún usuario tiene 'login' igual a 'in'
    const usuarioAutenticado = usuarios.find(usuario => usuario.login === 'in');
    const botonLogin = document.getElementById('loginBtn');
    const botonRegistro = document.getElementById('regisBtn');
    const enlace = document.getElementById('cambio1');
    const nombreUsuarioBarra = document.getElementById('nombreUsuarioNav');
    console.log(botonLogin);
    
    
    console.log(nombreUsuarioBarra);
    
  
    console.log(usuarioAutenticado);
    
    if (usuarioAutenticado) {
        
        console.log("logIN");
        //console.log(botonLogin);
        nombreUsuarioBarra.textContent = `Hola, ${usuarioAutenticado.nombre}`;
        botonLogin.textContent = "Cerrar Sesión";
        botonRegistro.textContent = "Mensajes";
  
  
        botonRegistro.onclick = function() {
            window.location.href = './src/pages/mensajes2.html';
        };
        botonLogin.onclick = function() {
            window.location.href = './src/pages/landing.html';
        };
        enlace.href = "./src/pages/home.html";
  
  
  
        // Asigna la función al hacer clic en "Cerrar Sesión"
        botonLogin.onclick = function() {
            // Cambia el valor de 'login' a 'out'
            usuarioAutenticado.login = 'out';
  
            // Guarda de nuevo el array de usuarios en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
             //agregar una redirección 
             window.location.href = './src/pages/login.html';
             
        
        };
  
    }else{
        console.log("LogaOut");
        botonLogin.textContent = "Iniciar Sesión";
        botonRegistro.textContent = "Registrate";
  
        botonRegistro.onclick = function() {
            window.location.href = './src/pages/formularioRegistro.html';
        };
        botonLogin.onclick = function() {
            window.location.href = './src/pages/login.html';
        };
        enlace.href = "./src/pages/landing.html";
        nombreUsuarioBarra.style.visibility = 'hidden';
    }
  }
  
  // funcion fetch para insertar la navbar
  document.addEventListener("DOMContentLoaded", function() {
      fetch('./src/pages/navbar.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('navbar--contenido').innerHTML = data;
  
          actualizarElementosSegunSesion();
        })
  
  
  
        .catch(error => console.error('Error loading navigation:', error));
    });
    
  