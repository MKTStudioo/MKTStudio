document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  // Abrir/cerrar el menú
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Cerrar el menú al hacer clic en un link
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});
