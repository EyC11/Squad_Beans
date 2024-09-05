const registrar = document.getElementById('revisar');

registrar.addEventListener('click', () => {
    //event.preventDefault();//previniendo comportamiento por defento del formulario       
    //Adaptar variables de acuerdo a los inputs

    //Aqui ya se extraen los valores de los inputs del formulario
    const nombreInput = document.getElementById("nombreInput").value;
    const apellidoInput = document.getElementById("apellidoInput").value;
    const correoInput = document.getElementById("email").value;
    const telefonoInput = document.getElementById("tel").value;
    const diaInput = document.getElementById("dia").value;
    const mesInput = document.getElementById("mes").value;
    const anioInput = document.getElementById("año").value;
    const contraseniaInput = document.getElementById("password").value;
    const estadoInput = document.getElementById("estado").value;
    const cuidadInput = document.getElementById("ciudad").value;
    const codigoPostalInput = document.getElementById("codigo--postal").value;
    const direccionInput = document.getElementById("direccion").value;


   /* Conexión back con front  */
 // Crear mi objeto que interactúa con el backend
    const usuario = {
    nombre: nombreInput,
    apellido: apellidoInput,
    email: correoInput,
    contraseña: contraseniaInput,
    telefono: telefonoInput,
    fechaNacimiento: `${diaInput}-${mesInput}-${anioInput}`,
    cp: codigoPostalInput,
    estado: estadoInput,
    ciudad: cuidadInput,
    direccion: direccionInput
}

// Comenzar con la llamada de la API (fetch, asynch-await, axios)
const url = `http://54.163.153.109/api/kapp`;

fetch(url, {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(usuario)
})
.then(response => {
    return response.json();
})
.then(data => {
    console.log('Guardado', data)
})
.catch(error => {
    console.error(error);
})


});


