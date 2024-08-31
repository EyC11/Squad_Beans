document.addEventListener('DOMContentLoaded', loadReviews);

document.getElementById('submit-review').addEventListener('click', function() {
    const reviewText = document.getElementById('review').value;

    if (reviewText) {
        const now = new Date();
        const timestamp = now.toLocaleString();

        const reviewData = {
            text: reviewText,
            date: timestamp
        };

        saveReview(reviewData);
        displayReview(reviewData);

        document.getElementById('review').value = '';
    }
});

function saveReview(reviewData) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(displayReview);
}

function displayReview(reviewData) {
    const reviewContainer = document.getElementById('reviews-container');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerText = `${reviewData.text}\n\nFecha: ${reviewData.date}`;
    reviewContainer.appendChild(newReview);
}



// APPHOME

// Acceder a los elementos que voy a manipular (botón y el div container)
const button = document.getElementById('button--card');
const container = document.getElementById('formulario--publicacion');

// Agregar estilos para visibilidad
container.style.visibility = 'hidden';

// Manejar eventos para ocultar el container desde el botón
button.addEventListener('click', () => {
    container.style.visibility = (container.style.visibility === 'visible') ? 'hidden' : 'visible'; 

});

const buttonCerrar = document.getElementById('button--cerrar');
buttonCerrar.addEventListener('click', () => {
    container.style.visibility = (container.style.visibility === 'visible') ? 'hidden' : 'visible'; 

});


document.addEventListener('DOMContentLoaded', function () {
  // Referencias a elementos del DOM
  const ikonikButton = document.getElementById('ikonik-button');
  const ikonikCount = document.getElementById('ikonik-count');
  const commentButton = document.getElementById('comment-button');
  const commentSection = document.querySelector('.comment-section');
  const submitCommentButton = document.getElementById('submit-comment');
  const commentInput = document.getElementById('comment-input');
  const wordCountDisplay = document.getElementById('word-count');
  const commentsContainer = document.querySelector('.comments-container');

  // Obtener el estado de "iKonik" del localStorage
  let hasGivenIkonik = localStorage.getItem('hasGivenIkonik') === 'true';
  let ikonikValue = parseInt(localStorage.getItem('ikonikCount')) || 0;

  // Mostrar el conteo si es mayor que 0
  if (ikonikValue > 0) {
      ikonikCount.style.display = 'inline';
      ikonikCount.textContent = ikonikValue;
  }

  

  // Manejar el clic en el botón de "iKonik"
  ikonikButton.addEventListener('click', function () {
      if (hasGivenIkonik) {
          // Quitar "iKonik"
          ikonikValue -= 1;
          ikonikCount.textContent = ikonikValue;
          if (ikonikValue === 0) {
              ikonikCount.style.display = 'none';
          }

          // Actualizar el estado en localStorage
          localStorage.setItem('ikonikCount', ikonikValue);
          localStorage.setItem('hasGivenIkonik', 'false');
          hasGivenIkonik = false;
          
      } else {
          // Dar "iKonik"
          ikonikValue += 1;
          ikonikCount.textContent = ikonikValue;
          ikonikCount.style.display = 'inline';

          // Actualizar el estado en localStorage
          localStorage.setItem('ikonikCount', ikonikValue);
          localStorage.setItem('hasGivenIkonik', 'true');
          hasGivenIkonik = true;
         
      }
  });

  // Mostrar/ocultar la sección de comentarios al hacer clic en el botón "Comentar"
  commentButton.addEventListener('click', function () {
      commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
  });

  // Inicializar contador de palabras
  commentInput.addEventListener('input', function () {
      let words = commentInput.value.trim().split(/\s+/).filter(word => word.length > 0); // Divide por espacios y filtra palabras vacías
      let wordCount = words.length;
      let remainingWords = 100 - wordCount;

      if (remainingWords < 0) {
          // Si el límite se excede, recorta el texto para que tenga exactamente 100 palabras
          words = words.slice(0, 100);
          commentInput.value = words.join(' ');
          remainingWords = 0; // Ajusta el contador a 0 porque hemos alcanzado el límite
      }

      wordCountDisplay.textContent = remainingWords;

      // Verificar si se excede el límite de palabras
      submitCommentButton.disabled = wordCount > 100; // Deshabilitar el botón si se excede el límite
  });

  // Manejar el envío de comentarios
  submitCommentButton.addEventListener('click', function () {
      const commentText = commentInput.value.trim();
      const words = commentText.split(/\s+/).filter(word => word.length > 0);

      if (words.length === 0) {
          alert('Por favor, escribe un comentario.');
          return;
      }

      // Crear un nuevo elemento de comentario
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.textContent = commentText;

      // Agregar el comentario a la lista de comentarios
      commentsContainer.appendChild(newComment);

      // Limpiar el campo de entrada y reiniciar el contador de palabras
      commentInput.value = '';
      wordCountDisplay.textContent = '100';
      submitCommentButton.disabled = false; // Rehabilitar el botón después de limpiar
  });
});

//JS para: obtener la fecha de manera automatica, de acuerdo al sistema del usuario.
const mostrarFecha = document.getElementById('fecha');
const hoy = new Date();

const dia = hoy.getDate();
const mes = hoy.getMonth()+1;
const agnio = hoy.getFullYear();
mostrarFecha.innerHTML = `${dia}/${mes}/${agnio}`;