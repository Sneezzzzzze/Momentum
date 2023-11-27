// Search for elements 

const hellos = document.getElementsByClassName("hello"); // array
console.log(hellos);

const title = document.getElementsByTagName("h1"); // array
console.log(title);

// best way to search, grab for elements (ref by Nico)
const titlee = document.querySelector(".hello h1"); // grab the first one
console.log(titlee);

const titlees = document.querySelectorAll(".hello h1"); // grab all (array)
console.log(titlees);

// Change the style of the color h1
const titles = document.querySelector("div.hello:first-child h1");
console.dir(titles);
titles.style.color = "blue";