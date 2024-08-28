
// Acceder a los elementos que voy a manipular (botón y el div container)
const button = document.getElementById('button--card');
const container = document.getElementById('formulario--publicacion');

// Agregar estilos para visibilidad
container.style.visibility = 'hidden';

// Manejar eventos para ocultar el container desde el botón
button.addEventListener('click', () => {
    container.style.visibility = (container.style.visibility === 'visible') ? 'hidden' : 'visible'; 

});

document.addEventListener('DOMContentLoaded', function () {
  // Referencias a elementos del DOM
  const ikonikButton = document.getElementById('ikonik-button');
  const ikonikCount = document.getElementById('ikonik-count');
  const commentButton = document.getElementById('comment-button');
  const commentSection = document.querySelector('.comment-section');
  const commentInput = document.getElementById('comment-input');
  const submitCommentButton = document.getElementById('submit-comment');
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

  // Inicializar contador de palabras
  commentInput.addEventListener('input', function () {
    const wordCount = commentInput.value.split(/\s+/).filter(word => word.length > 0).length;
    const remainingWords = 100 - wordCount;
    wordCountDisplay.textContent = remainingWords;
  });

  // Mostrar/ocultar la sección de comentarios al hacer clic en el botón "Comentar"
  commentButton.addEventListener('click', function () {
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
  });

  // Manejar el envío de comentarios
  submitCommentButton.addEventListener('click', function () {
    const commentText = commentInput.value.trim();
    if (commentText.length === 0) {
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
  });
});
