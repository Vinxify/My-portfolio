const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".nav");
// const window = document.querySelector("body");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("bx-x");
  navbar.classList.toggle("active-btn");
});

// Window.screen = () => {
//   menuBar.classList.remove("bx-x");
//   navbar.classList.remove("active-btn");
// };

window.addEventListener("scroll", () => {
  menuBar.classList.remove("bx-x");
  navbar.classList.remove("active-btn");
});
