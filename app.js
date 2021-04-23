"use strict";

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
// Slider

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

/* 

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");


tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
}); */

const footerPlus1 = document.querySelectorAll("#footer-plus");
// const footerPlus1 = document.querySelector("#footer-plus");
const footerH1 = document.querySelector("#footer-h1");
const dada = document.querySelector(".dada");
const dada1= document.querySelector(".dada1");
const dada2= document.querySelector(".dada2");
const dada3= document.querySelector(".dada3");
const dada4= document.querySelector(".dada4");
const dada5= document.querySelector(".dada5");
const dada6 = document.querySelector(".dada6");
const dada7 = document.querySelector(".dada7");
const dada8 = document.querySelector(".dada8");
const dada9 = document.querySelector(".dada9");
const xx = document.querySelector(".xx");
const openClik = function (r) {
  footerPlus1.forEach((el) =>
    el.addEventListener("click", function (e) {
      const clicked = e.target;
      if (clicked) {
        // xx.classList.add("rota");
        r.classList.toggle("footer-h1");
      
      }
    })
  );
};
openClik(dada);
openClik(dada1);
openClik(dada2);
openClik(dada3);
openClik(dada4);
openClik(dada5);
openClik(dada6);
openClik(dada7);
openClik(dada8);
openClik(dada9);



const header = document.querySelector(".header");
const sectionOne = document.querySelector(".session-9");
const navHeight = header.getBoundingClientRect().height;
const sectionOneOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.remove("header-sticky");
    } else {
      header.classList.add("header-sticky");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const openMenuNav = document.querySelector(".nav-menu-ferrari-icon");
const closeMenuNav = document.querySelector(".close-menu");
const menuAuto = document.querySelector(".menu-auto");
const menuContent = document.querySelector(".menu-stufss ");
const autoArrow = document.querySelector("#auto-arrow ");
const pressMenureturn = document.querySelector("#returned");
openMenuNav.addEventListener("click", function () {
  menuContent.style.opacity = "1";
  menuContent.style.visibility = "visible";
});

closeMenuNav.addEventListener("click", function () {
  menuContent.style.opacity = "0";
  menuContent.style.visibility = "hidden";
});

pressMenureturn.addEventListener("click", function () {
  menuAuto.classList.toggle("dario");
});

autoArrow.addEventListener("click", function () {
  menuAuto.classList.toggle("dario");
});
