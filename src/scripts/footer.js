//   mostrar el footer al llegar al final de la página
window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  });