const slides = document.getElementsByClassName("mySlides");
let slideIndex = 0;

function showSlides() {
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => {
    slides[slideIndex - 1].style.display = "none";
    showSlides();
  }, 5000);
}
showSlides();
