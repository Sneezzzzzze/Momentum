// Events 3

const h1 = document.querySelector("div.hello:first-child h1");

// Window Events

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);

// WiFi Events

function handleWindowOffline() {
    alert("SOS no WIFI");
}

window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline() {
    alert("All Good");
}

window.addEventListener("online", handleWindowOnline);