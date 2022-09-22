"use strict";

// Variabler
let navHome = document.getElementById("home");
let navAbout = document.getElementById("about");
let navContact = document.getElementById("contact");
let navbar = document.getElementById("nav");

//Bakgrundsbilden på startsidan
let background = document.getElementById("background");

//Länkarna i navigationsrutan
let homeItem = document.getElementById("homeButton");
let aboutItem = document.getElementById("aboutButton");
let contactItem = document.getElementById("contactButton");

// Hamburgarmenyn och pilen i navigationsmenyn
let arrowButton = document.getElementById("left__arrow");
let navButton = document.getElementById("hamburger");

let formWindow = document.getElementById("form");
window.onload = init; //Vilken funktion som ska köras vid start

/*----------Effekter vid start och skroll----------*/
let homeTitle = document.getElementById("title"); // Titeln på startsidan

let aboutTitle = document.getElementById("aboutTitle");
let aboutTextOne = document.getElementById("aboutTextOne");
let aboutTextTwo = document.getElementById("aboutTextTwo");

let contactTitle = document.getElementById("contactTitle"); //Titeln på kontaktsidan i slutet
let contactClick = document.getElementById("contactClick"); //Knappen "Contact"

let meta = document.querySelector(".socialMedia");

// Event lyssnare
homeItem.addEventListener("click", hideNav);
aboutItem.addEventListener("click", hideNav);
contactItem.addEventListener("click", hideNav);
navbar.addEventListener("click", hideNav);
arrowButton.addEventListener("click", hideNav);

navButton.addEventListener("click", () => {
  showNav();
  hideBurger();
});

navHome.addEventListener("click", () => {
  hideNav();
});

navAbout.addEventListener("click", () => {
  hideNav();
});

navContact.addEventListener("click", () => {
  hideNav();
});

/*----------Funktioner----------*/
function hideNav() {
  //Flytta navigationsrutan till vänster utanför viewporten
  navbar.style.left = "-500vw";

  //Flytta tillbaka hamburgarmeny ikonen
  navButton.style.left = "0";

  formWindow.style.opacity = "1";
}

function hideBurger() {
  //Gömmer hamburgarmenyn vid klick på den
  navButton.style.left = "-500vw";
  formWindow.style.opacity = "0.4";
}

function showNav() {
  //Flyttar navigationsrutan till synligt fält
  navbar.style.left = "0";
}

// Funktion som laddar in vid start
function init() {
  navButton.style.transform = "translateX(0px)"; //Animering på hamburgarmenyn vid inladdning av sidan

  //Animering av bakgrundsbild vid initialisering
  background.style.transform = "scale(1.1)";

  background.style.opacity = "1";
  //Animering av titeln vid initiasering
  homeTitle.style.transform = "translateY(0px)";
  homeTitle.style.opacity = "1";
  //Animering av socialamedia ikonerna vid inladdning
  socialMedia.style.transform = "rotate(0)";
  socialMedia.style.transform = "translateX(0)";
}

//Funktion som säger vad som ska hända vid ett visst skrollvärde
window.addEventListener("scroll", () => {
  if (this.scrollY >= 400) {
    aboutTitle.style.transform = "translateX(0px)";
    aboutTitle.style.opacity = "1";

    aboutTextOne.style.transform = "translateX(0px)";
    aboutTextOne.style.opacity = "1";

    aboutTextTwo.style.transform = "translateX(0px)";
    aboutTextTwo.style.opacity = "1";
  }
  if (this.scrollY >= 1300) {
    contactClick.style.opacity = "1";

    contactTitle.style.transform = "translateY(0px)";
    contactTitle.style.opacity = "1";
  }
});

/*----------Kontaktformulären----------*/
function alertBox() {
  alert("Thank You! We will be in touch soon!"); //Ruta som kommer upp vid klick på submit knappen
}
