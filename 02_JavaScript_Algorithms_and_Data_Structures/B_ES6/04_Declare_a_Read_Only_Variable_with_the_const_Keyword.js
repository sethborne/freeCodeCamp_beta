// change 'var' to 'let' or 'const'
// rename constant variables
"use strict"
const PI = 3.14;
var radius = 10;
const calculateCircumference = function (r) {
    const diameter = 2 * r;
    const result = PI * diameter;
    return result;
};
// Test your code
console.log(calculateCircumference(radius));