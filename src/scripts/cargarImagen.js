const archivoInput = document.getElementById("archivo-input");
console.log(archivoInput);


const vistaPreviaContenedor = document.getElementById("vistaPrevia-container");
console.log(vistaPreviaContenedor);

const vistasPrevias = vistaPreviaContenedor.querySelectorAll("img")
console.log(vistasPrevias);

archivoInput.addEventListener("change",function(event){
    const archivos =event.target.files;
    const a=archivos.lenght;
    console.log(a);

    if (archivos.lenght > 4){
        alert("solo puedes cargar un maximo de 4 imagenes");
        archivoInput.value='';
        console.log(archivos.lenght);
        
        return;

    }
    
    vistasPrevias.forEach((img,index)=>{
        if (archivos[index]){
            const arch =new FileReader();
            arch.onload = function(e){
                img.src = e.target.result;
                img.style.display ="block"
            }
            arch.readAsDataURL(archivos[index]);

        }else{
            img.style.display = "none"
        }
    })


})