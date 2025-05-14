// Función del menú desplegable
function toggleMenu() {
    const menu = document.getElementById("menu-list");
    menu.classList.toggle("menu-visible");
    menu.classList.toggle("menu-oculto");
  }
  
  // Función del carrusel
  let index = 0;
  
  function moverCarrusel(direccion) {
    const carrusel = document.querySelector(".carrusel");
    const totalSlides = document.querySelectorAll(".carrusel-img").length;
  
    index += direccion;
  
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
  
    carrusel.style.transform = `translateX(-${index * 100}%)`;
  }  <script src="code.js"></script>

  const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagenAmpliada");
const imagenes = document.querySelectorAll(".imagen");
const cerrar = document.querySelector(".cerrar");

imagenes.forEach(imagen => {
  imagen.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = imagen.src;
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const slide = document.getElementById("carouselSlide");
const images = slide.querySelectorAll("img");

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
  slide.style.transform = `translateX(${-size * counter}px)`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  counter++;
  if (counter >= images.length) counter = 0;
  updateCarousel();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  counter--;
  if (counter < 0) counter = images.length - 1;
  updateCarousel();
});

// Asegúrate de que el tamaño se actualice si cambia la pantalla
window.addEventListener("resize", () => {
  updateCarousel();
});
