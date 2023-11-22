// condition
// if else

// prompt() old version show pop up window to ask user input value
// const age = prompt("How old are you?");
// typeof show type of value
// console.log(typeof age);

// convert type of value
// parseInt() convert string to number
// console.log(typeof parseInt(age));

// Age calculator
const aGe = isNaN(parseInt(prompt("How old are you?")));
console.log(aGe);

if (aGe || aGe < 0) {
    /// condition === true
    console.log("Please write a real positive number");
} else if(aGe < 18) {
    console.log("You are too young.");
} else if(aGe >= 18 && aGe <= 50) { // && And || Or
    console.log("You can drink");
} else if (aGe > 50 && aGe <= 80) {
    console.log("You should exercise");
} else if (aGe > 80) {
    console.log("You can do whatever you want");
} else {
    /// codition === false
    console.log("You can't drink");
}