// Funciones para las reseñas de usuario
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



//JS para: obtener la fecha de manera automatica, de acuerdo al sistema del usuario.
const mostrarFecha = document.getElementById('fecha');
const hoy = new Date();

const dia = hoy.getDate();
const mes = hoy.getMonth()+1;
const agnio = hoy.getFullYear();
mostrarFecha.innerHTML = `${dia}/${mes}/${agnio}`;


