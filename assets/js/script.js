'use strict';

//O carregamento terminará após o documento ser carregado
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

//Adicionar ouvinte de evento em vários elementos
const addEventOnElements = function (elements, eventType, callback) {

  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }

}

//NAVBAR

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

// Função que oculta ou mostra o cabeçalho dependendo da direção do scroll
const hideHeader = function () {

  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

//Função que monitora o evento de scroll na janela
window.addEventListener("scroll", function () {

  if (window.scrollY >= 50) {

    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();

  } else {

    header.classList.remove("active");
    backTopBtn.classList.remove("active");

  }

});

//HERO SLIDER
const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {

  if (currentSlidePos >= heroSliderItems.length - 1) {

    currentSlidePos = 0;

  } else {

    currentSlidePos++;

  }

  updateSliderPos();

}

//Função de slide manual.
heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {

  if (currentSlidePos <= 0) {

    currentSlidePos = heroSliderItems.length - 1;

  } else {

    currentSlidePos--;

  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

//Função de slide automático

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



//Função de efeito paralaxe

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});

//Função de redirecionamento para whatsapp.
document.addEventListener("DOMContentLoaded", function() {

  const whatsapp = document.getElementsByClassName('whatsappIcon');

  if (whatsapp[0] || whatsapp[1] || whatsapp[2]) {

    whatsapp[0].addEventListener('click', function() {

      window.open('https://wa.me/5564996753372');

    });

    whatsapp[1].addEventListener('click', function() {

      window.open('https://wa.me/5564996753372');

    });

    whatsapp[2].addEventListener('click', function() {

      window.open('https://wa.me/5564996753372');

    });

  } else {

    console.log("Elemento whatsappIcon não encontrado.");

  }

});
