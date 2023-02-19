const modal = document.getElementById("myModal");


const lnk = document.getElementById("myLnk");


const span = document.getElementsByClassName("close")[0];


lnk.addEventListener("click", (event) => {
  modal.style.display = "block";
});


span.addEventListener("click", (event) => {
  modal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


function openModal() {
  document.getElementById("myModallb").style.display = "block";
}

function closeModal() {
  document.getElementById("myModallb").style.display = "none";
}

let slideIndex = 1;
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
