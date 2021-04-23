"use strict";

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
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
openClik(dada8)


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