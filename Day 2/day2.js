// object

const playerName = "Junbeom";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// const player = ["Junbeom", 121212, true, "little bit"];

// player[0] == name
// player[1] == points

const player = {
    name: "Junbeom",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
// or
console.log(player["name"]);
// or
player.name;

//change value of object property
console.log(player);
player.fat = false; 
console.log(player);

// add value of object property
console.log(player);
player.lastName = "potato";
console.log(player);

// add points to player.points property
console.log(player);
player.points = player.points + 15;
console.log(player);

// ------ //

// function
// piece of code that does one or more actions
// capsulate code and reuse it

// world with no function
console.log("Hello my name is Junbeom");
console.log("Hello my name is potato");
console.log("Hello my name is tomato");
console.log("Hello my name is apple");
console.log("Hello my name is banana");

// world with function
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson, "I'm " + age);
}
sayHello("GAy", 20);


// Calculator

function plus(x, y) {
    console.log(x + y);
}

function divide(x, y) {
    console.log(x / y);
}
plus(5, 5);
divide(10, 5);

// object + function
const player = {
    name: "Junbeom",
    sayHello: function(otherName) {
        console.log("Hello " + otherName + " nice to meet you!");
    },
};
player.sayHello("lynn");
