const images = ["minju.png", "haerin.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");
bgImage.setAttribute("src", `img/${chosenImage}`);
document.body.appendChild(bgImage);
