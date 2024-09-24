//Funcion para mostrar el nombre de usuario desde la local storage en apartado de hacer una publicacion
function nombreLocalStorage() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogin = usuarios.find(usuario => usuario.login === 'in');
    const nombreUsuarioPublicar = document.getElementById('nombreUsuarioPublicar');
    
    console.log(nombreUsuarioPublicar);
    if (usuarioLogin) { 
        nombreUsuarioPublicar.textContent = ` ${usuarioLogin.nombre} ${usuarioLogin.apellido}`;
    }else{
        nombreUsuarioPublicar.textContent = ` `;
    }
}

nombreLocalStorage();

//Funcion para mostrar el nombre de usuario desde la local storage en la tarjeta de perfil
function nombreLocalStoragePerfil() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogin = usuarios.find(usuario => usuario.login === 'in');
    const nombreUsuarioPublicar = document.getElementById('nombreUsuarioPerfil');
    
    console.log(nombreUsuarioPublicar);
    if (usuarioLogin) { 
        nombreUsuarioPublicar.textContent = ` ${usuarioLogin.nombre} ${usuarioLogin.apellido}`;
    }else{
        nombreUsuarioPublicar.textContent = ``;
    }
}

nombreLocalStoragePerfil();