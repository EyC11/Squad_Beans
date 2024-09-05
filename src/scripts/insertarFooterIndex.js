
document.addEventListener("DOMContentLoaded", function() {
    fetch('./src/pages/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer--contenido').innerHTML = data;
      })
      .catch(error => console.error('Error loading navigation:', error));
  });