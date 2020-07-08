var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var bars = document.getElementsByClassName("slider__bar");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("invisible");
  }
  for (i = 0; i < bars.length; i++) {
      bars[i].classList.remove("active");
  }
    slides[slideIndex-1].classList.remove("invisible");
    bars[slideIndex-1].classList.add("active");
}
