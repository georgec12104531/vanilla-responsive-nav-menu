// DOM Elements
let menu = document.querySelector("#menu");
let navRight = document.querySelector("#nav-right");
let navContainer = document.querySelector("#nav-container");
let content = document.querySelector("#content");

// Event Listeners
// When the menu button is show, toggle open and closed classes
menu.addEventListener("click", () => {
  // Close menu
  if (navRight.classList.contains("open-nav-right")) {
    navRight.classList.remove("open-nav-right");
    navRight.classList.add("close-nav-right");
    navContainer.classList.remove("open-nav-container");
    navContainer.classList.add("close-nav-container");
    content.classList.remove("open-content");
    content.classList.add("close-content");
    // Open menu
  } else {
    navRight.classList.remove("close-nav-right");
    navRight.classList.add("open-nav-right");
    navContainer.classList.remove("close-nav-container");
    navContainer.classList.add("open-nav-container");
    content.classList.remove("close-content");
    content.classList.add("open-content");
  }
});
