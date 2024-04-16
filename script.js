const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.remove('slide:target');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('slide:target');
}

setInterval(showSlide, 3000); // Change interval (in milliseconds) for slide transition speed
