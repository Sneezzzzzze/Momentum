// Different between return and console.log
// Return is for the function itself, console.log is for the console.
const age = {
    wow: function wow() {
        return age;
    }
};
const krAge = age.wow();
console.log(krAge);