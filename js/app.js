const link = [ "Home", "Contact us", "Shop"];
const linktags = [
    "index.html",
    "contact.html",
    "shop.html",
];
let navlength = link.length;
let ul = "<ul>";
for(let i=0; i<navlength; i++){
    ul += "<li><a href=" + linktags[i] + ">" + link[i] + "</a></li>";
}
ul += "</ul>";
document.getElementById("nav").innerHTML = ul;

// ----headerscroll----

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// ----slider----

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
};

// ----chat----

function show(){
  document.getElementById("messageboxcontainer").style.display = "block";
}
function hide(){
  document.getElementById("messageboxcontainer").style.display = "none";
};

const button = document.querySelector(".search");
const sarchbar = document.querySelector(".input");

button.addEventListener("click", function () {
  sarchbar.classList.toggle("search-active");
});

