const slides = document.getElementsByClassName("mySlides");
let slideIndex = 0;
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

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
