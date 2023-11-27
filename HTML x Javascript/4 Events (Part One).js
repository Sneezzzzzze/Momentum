// Events

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

// When the title is clicked, the function handleTitleClick is called
title.addEventListener("click", handleTitleClick);