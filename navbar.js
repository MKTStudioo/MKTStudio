document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Solo alterna el menú con el botón hamburguesa, no se cierra al hacer clic en los enlaces
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
// ...no hay código que cierre el menú al hacer clic en los enlaces...