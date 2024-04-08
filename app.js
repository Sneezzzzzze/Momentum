const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); // preventDefault() stops default behavior of event
    const username = loginInput.value;
    console.log(username);
    // if(username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long");
    // }
}

loginForm.addEventListener("submit", onLoginSubmit);
// all first argument in eventlistener is event object  