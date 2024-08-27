
document.addEventListener("DOMContentLoaded", function() {
    fetch('../pages/navbarInicio.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar--contenido').innerHTML = data;
      })
      .catch(error => console.error('Error loading navigation:', error));
  });
  
