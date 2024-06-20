const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const h2 = document.createElement("h2");
h2.innerText = "DOM Basics";
newSection.appendChild(h2);
const p = document.createElement("p");
p.innerText = "This was added through JS";
newSection.appendChild(p);

document.body.appendChild(newSection);