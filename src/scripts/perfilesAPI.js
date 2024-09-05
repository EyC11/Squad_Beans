const loginRevisar = document.getElementById('mostrarinfo');

loginRevisar.addEventListener('click', () => {
    const userInfo = document.getElementById('userCard');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogin = usuarios.find(usuario => usuario.login === 'in');
    const url = `http://localhost:8080/api/kapp/konikappers/email?konikmail=${usuarioLogin.email}`;

    // fetch para método get
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userInfo.innerHTML = `


                <p>Nombre: ${data.nombre} ${data.apellido}</p>
                <p>Correo electrónico: ${data.email}</p>
                <p>Teléfono: ${data.telefono}</p>
                <p>Fecha de Nacimiento: ${data.fechaNacimiento}</p>
                <p>Código postal: ${data.cp}</p>
                <p>Estado: ${data.estado}</p>
                <p>Ciudad: ${data.ciudad}</p>
                <p>Dirección: ${data.direccion}</p>

            `
        })
        .catch(error => {
            userInfo.innerHTML = `
                Usuario no encontrado
            `
            console.error(error)
        })
})