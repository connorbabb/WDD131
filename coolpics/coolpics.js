document.querySelector("#year").textContent = new Date().getFullYear();
// You could also use getElementByID. But you don't use the # before year.
// using querySelector you can use either classes or id and it's easier 
// but then you have to identify if it's a id or class with a # or a .
// document.getElementById("year").textContent = new Date().getFullYear();

// You could also do this:
// const year = document.QuerySelector("#year");
// const currentYear = document.querySelector("#year");
// year.textContent = currentYear;