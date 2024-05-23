document.addEventListener("DOMContentLoaded", () => {
  SetUpEvents();
  handleResize();
  window.addEventListener("resize", handleResize);
  document.querySelector("#year").textContent = new Date().getFullYear();
});

function SetUpEvents() {
    const images = document.querySelectorAll('figure img')
    images.forEach(img => {
        img.addEventListener('click', viewHandler);
    })
}

function toggleMenu() {
    const nav = document.getElementById("Menu")
    nav.classList.toggle("hide");
}

function viewHandler(event) {
    const viewer = document.querySelector(".viewer");
    const img = event.target;
    const fullImage = viewer.querySelector("img");
    const srcParts = img.getAttribute('src').split('-');
    const newImageSrc = srcParts[0] + '-full.jpeg';

    fullImage.src = newImageSrc;
    fullImage.alt = img.alt;
    viewer.classList.remove("hide");
}

function hideView(event) {
  if (event) event.stopPropagation(); 
  const viewer = document.querySelector(".viewer");
  viewer.classList.add("hide");
}

function handleResize() {
    const menu = document.querySelector("#Menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);


document.querySelector("#year").textContent = new Date().getFullYear();
// You could also use getElementByID. But you don't use the # before year.
// using querySelector you can use either classes or id and it's easier 
// but then you have to identify if it's a id or class with a # or a .
// document.getElementById("year").textContent = new Date().getFullYear();

// You could also do this:
// const year = document.QuerySelector("#year");
// const currentYear = document.querySelector("#year");
// year.textContent = currentYear;