const loginRevisar = document.getElementById('mostrarinfo');

loginRevisar.addEventListener('click', () => {
    const userInfo = document.getElementById('userCard');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogin = usuarios.find(usuario => usuario.login === 'in');
    const url = `http://54.163.153.109/api/kapp/konikappers/email?konikmail=${usuarioLogin.email}`;

    // fetch para método get
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userInfo.innerHTML = `


                <h3>${data.nombre} ${data.apellido}</h3>
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