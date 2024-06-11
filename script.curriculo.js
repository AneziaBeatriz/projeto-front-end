let index = 1;
showSlides(index);

function addSlides(n) {
  showSlides(index += n)
}

function currentSlide(n) {
  showSlides(index = n)
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    index = 1;
  }

  if (n < 1) {
    index = slides.length
  }

  for (let i=0; i<slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index-1].style.display = "flex";
  dots[index-1].className += " active";
}


let elem_preloader = document.getElementById ("preloader");
let elem_loader = document.getElementById ("loader");
console.log ("Testing...Ok");

setTimeout(function() {
    elem_preloader.classList.remove("preloader");
    elem_loader.classList.remove("loader");
    }, 1280)


function openNav(){
    document.getElementById("myNav").style.width = '15%';
    
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
}