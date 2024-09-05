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