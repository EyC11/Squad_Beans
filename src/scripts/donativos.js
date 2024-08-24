// Obtener los elementos del DOM
const donationButtons = document.querySelectorAll('.btn-donation');
const manualInput = document.getElementById('input-donaciones');
const donationAmountDisplay = document.getElementById('donaciones-amount');
const paymentForm = document.getElementById('paymentForm');
const cancelButton = document.getElementById('pago--btnCancelar');

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

// Manejar el evento de envío del formulario de pago
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío real del formulario

    // Obtener los valores de los campos
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const fullName = document.getElementById('fullName').value.trim();
    const country = document.getElementById('country').value.trim();
    const billingAddress = document.getElementById('billingAddress').value.trim();

    // Verificar si todos los campos están llenos
    if (email && cardNumber && expiryDate && cvv && fullName && country && billingAddress) {
        alert('Gracias!! c: Tu donación se ha enviado correctamente!');
        serviceForm.reset();
        paymentForm.reset();
        
    } else {
        alert('Por favor, complete todos los campos del formulario.');
    }
});

    //El usuario decide cancelar 
    cancelButton.addEventListener('click', function() {
        paymentForm.reset(); // Restablecer el formulario de pago
        serviceForm.reset(); // Restablecer el formulario de donación (si es necesario)
    });