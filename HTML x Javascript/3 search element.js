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