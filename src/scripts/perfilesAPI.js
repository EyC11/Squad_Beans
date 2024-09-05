const loginRevisar = document.getElementById('buttton--inicio--sesion');

loginRevisar.addEventListener('click', () => {
    const correoElectronico = document.getElementById('email').value;
    const url = `http://localhost:8080/api/v1/konikappers/email?konikmail=${correoElectronico}`;

    // fetch para método get
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userInfo.innerHTML = `
                
                /*Datos de la base de datos konikappers (contraseña se omitio )*/
                <h2>Nombre: ${data.nombre}</h2>
                <p>Apellido: ${data.apellido}</p>
                <span class="profile-service">Servicio de albañilería</span>
                <p>Correo electónico: ${data.email}</p>
                <p>Teléfono: ${data.telefono}</p>
                <p>Fecha de Nacimiento: ${data.fechaNacimiento}</p>
                <p>Código postal: ${data.cp}</p>
                <p>Estado: ${data.estado}</p>
                <p>Ciudad: ${data.cuidad}</p>
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