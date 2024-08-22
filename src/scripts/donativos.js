// Obtener los elementos del DOM
const donationButtons = document.querySelectorAll('.btn-donation');
const manualInput = document.getElementById('input-donaciones');
const donationAmountDisplay = document.getElementById('donaciones-amount');

// Función para actualizar el monto de donaciones
function updateDonationAmount(amount) {
    donationAmountDisplay.textContent = `$ ${amount}.00`;
}

// Agregar eventos a los botones de donación
donationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const amount = button.getAttribute('data-amount');
        updateDonationAmount(amount);
    });
});

// Agregar evento al campo de entrada manual
manualInput.addEventListener('input', () => {
    const amount = manualInput.value;
    if (amount) {
        updateDonationAmount(amount);
    } else {
        updateDonationAmount('0');
    }
});
