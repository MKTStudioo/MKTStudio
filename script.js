
// Animación para texto (fadeInUpTexto)
const animTextos = document.querySelectorAll('.anim-texto');
animTextos.forEach((el, i) => {
  el.style.animationDelay = (i * 0.2) + 's';
  el.classList.add('anim-texto');
});

// Animación por scroll para elementos con .anim-scroll
const animElements = document.querySelectorAll('.anim-scroll');

const mostrarAnimados = () => {
  animElements.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight * 0.85;
    if (top < visible) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarAnimados);
window.addEventListener('load', () => {
  mostrarAnimados();
  animTextos.forEach((el, i) => {
    el.style.animationPlayState = 'running';
  });
});

