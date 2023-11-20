// console.log(); = Print out the result in console
// variables (const mean variable can't be changed let mean variable can be changed)

// const defult if want to change use let

const a = 50;
const b = 2;
let myName = "Junbeom";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "Junboom";

console.log("Your new name is " + myName);

// --------- //

// boolean true, false
// null means nothing (not 0, not undefined) 

const amIFat = null;
let something; // undefined

console.log(something, amIFat);

// --------- //

// Array 
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);
