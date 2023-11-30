// Events 2

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}

// When the title is clicked, the function handleTitleClick is called
title.addEventListener("click", handleTitleClick);
// or
title.onclick = handleTitleClick;

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

// When the mouse enters the title, the function handleMouseEnter is called
title.addEventListener("mouseenter", handleMouseEnter); // In property, you can see the event name
// or
title.onmouseenter = handleMouseEnter;

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

// When the mouse leaves the title, the function handleMouseLeave is called
title.addEventListener("mouseleave", handleMouseLeave);
// or
title.onmouseleave = handleMouseLeave;