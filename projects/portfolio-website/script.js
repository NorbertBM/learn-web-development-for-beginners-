// const toggle = document.getElementById("theme-toggle");
// toggle.addEventListener("click", function () {
//   document.documentElement.classList.toggle("dark");
// });
// Refactor
//TODO:  Dark Mode
document.querySelector("#theme-toggle").onclick = () =>
  document.documentElement.classList.toggle("dark");

// TODO: Menu Toggle

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.onclick = () => menu.classList.toggle("hidden");

document.onclick = (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.add("hidden");
  }
};

// TODO: Back to the top of the page

const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
backToTopButton.onclick = () => window.scrollTo({ top: 0 });

// TODO: Dynamic year in footer

const currentYear = new Date().getFullYear();

document.querySelector("#current-year").textContent = currentYear;
