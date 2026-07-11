const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
    logo.classList.toggle("invisible");
    nav.classList.toggle("shown");
    hamburger.classList.toggle("active");
}