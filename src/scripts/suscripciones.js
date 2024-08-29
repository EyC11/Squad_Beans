function actualizarElementosSegunStatus() {
    // Obtén el array de usuarios desde el localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Verifica si algún usuario tiene 'login' igual a 'in'
    const usuarioAutenticado = usuarios.find(usuario => usuario.login === 'in');
    const status = usuarioAutenticado.status;
    console.log(status);
    

    const botonfree = document.getElementById('boton--gratis');
    const botonmensual = document.getElementById('boton--mensual');
    const botonAnual = document.getElementById('boton--anual');

    // secciones de tarjetas
    const tarjetagratis = document.querySelector(".tarjeta--gratis");
    const tarjetapremium = document.querySelector(".tarjeta--mensual");
    const tarjetapremiump = document.querySelector(".tarjeta--anual");
    

    console.log(usuarioAutenticado);
    
    if (status === "free") {
        
        console.log("free");
        //console.log(botonLogin);
        botonfree.textContent = 'Plan actual';
        botonfree.onclick=null;
        botonfree.classList.remove
        tarjetagratis.style.border ='5px solid #D9B70D'

        



        // Asigna la función al hacer clic en "Cerrar Sesión"
        botonmensual.onclick = function() {

            // Cambia el valor de 'login' a 'out'
            usuarioAutenticado.status = 'premium';
            // Guarda de nuevo el array de usuarios en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            //agregar una redirección 
            window.location.href = 'suscripciones.html';     
        
        };
        botonAnual.onclick = function() {

            // Cambia el valor de 'login' a 'out'
            usuarioAutenticado.status = 'premiump';
            // Guarda de nuevo el array de usuarios en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            //agregar una redirección 
            window.location.href = 'suscripciones.html';
        
        };

    }else if ( status === "premium"){
        botonmensual.textContent = 'Plan actual';
        botonmensual.onclick=null;
        tarjetapremium.style.border ='5px solid #D9B70D'


        botonfree.onclick = function() {

            // Cambia el valor de 'login' a 'out'
            usuarioAutenticado.status = 'free';
            // Guarda de nuevo el array de usuarios en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            //agregar una redirección 
            window.location.href = 'suscripciones.html';
        
        };

        botonAnual.onclick = function() {

            // Cambia el valor de 'login' a 'out'
            usuarioAutenticado.status = 'premiump';
            // Guarda de nuevo el array de usuarios en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            //agregar una redirección 
            window.location.href = 'suscripciones.html';
        
        };
        
    }else{
        botonAnual.textContent = 'Plan actual';
        botonAnual.onclick=null;

        tarjetapremiump.style.border ='5px solid #D9B70D'


        botonfree.onclick = function() {

            // Cambia el valor de 'login' a 'out'
            usuarioAutenticado.status = 'free';
            // Guarda de nuevo el array de usuarios en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            //agregar una redirección 
            window.location.href = 'suscripciones.html';
        
        };
        botonmensual.onclick = function() {

            // Cambia el valor de 'login' a 'out'
            usuarioAutenticado.status = 'premium';
            // Guarda de nuevo el array de usuarios en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            //agregar una redirección 
            window.location.href = 'suscripciones.html';     
        
        };


    }
        
    
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', actualizarElementosSegunStatus);





