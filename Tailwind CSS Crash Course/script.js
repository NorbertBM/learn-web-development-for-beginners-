// console.log("script");

// const darkModeTogglerBtn = document.getElementById("dark-mode-toggle");
// // console.log(darkModeTogglerBtn);

// function toggleDarkMode() {
//   const htmlElement = document.documentElement;
//   htmlElement.classList.toggle("dark");
// }

// darkModeTogglerBtn.addEventListener("click", function () {
//   toggleDarkMode();
// });

// TODO: Refactor
const modal = document.querySelector("#modal");
document.querySelector("#dark-mode-toggle").onclick = () =>
  document.documentElement.classList.toggle("dark");

document.querySelector("#message-button").onclick = () => toggleModal();

// TODO: create toggle modal function
function toggleModal() {
  modal.classList.toggle("hidden");
}

modal.onclick = function (event) {
  if (event.target === this) {
    console.log("modal");
    this.classList.add("hidden");
  }
};

// TODO: send message

document.querySelector("#modal-send-button").onclick = () => {
  const message = document.querySelector("#modal-input");
  if (message.value === "") {
    window.alert("Please enter a message");
    return;
  } else {
    window.alert("Message sent: " + message.value);
    message.value = "";
    toggleModal();
  }
};
