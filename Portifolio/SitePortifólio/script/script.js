const IMAGES = ["img/Vitor1.png", "img/Vitor2.png", "img/Vitor3.png", "img/Vitor4.png", "img/Vitor5.png"];
let currentIndex = 0;

function getCarrossel() {
  return document.getElementById("carrossel");
}

function getNextSrc() {
  const max = IMAGES.length - 1;
  if (currentIndex >= max) currentIndex = 0;
  else currentIndex = currentIndex + 1;

  return IMAGES[currentIndex];
}

function updateSlide() {
  const src = getNextSrc();
  const carrossel = getCarrossel();
  carrossel.src = src;
}

setInterval(updateSlide, 5000);