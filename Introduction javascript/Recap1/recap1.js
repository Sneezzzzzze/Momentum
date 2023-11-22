// Recap //
// Datatypes
// String, Number, Boolean, null, undefined
// null notingness
// undefined not declared

// saving variables, organizing data
// const let var (not common)
// const not allow to update
// let allow to update

// Array
const me = "Kim"
const days = [1, false, "potato", null, undefined, "Junbeom", me];
            //  [0]  [1]      [2]     [3]    [4]         [5]     [6]
days[2] = "tomato";
days.push("apple");

// Object
const player = {
    name: "Junbeom",
    points: 10,
    fat: true,
};
console.log(player.name);
console.log(player["name"]);
player.name = "potato";
console.log(player.name);
player.lastName = "Kim";
console.log(player.lastName);

// Function
function plus(x, y) {
    console.log(x + y);
}
plus(2, 5);

const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    power: function(a, b) {
        console.log(a**b);
    }
};
calculator.add(5, 5);
calculator.minus(5, 5);
calculator.divide(5, 5);
calculator.power(5, 5);
