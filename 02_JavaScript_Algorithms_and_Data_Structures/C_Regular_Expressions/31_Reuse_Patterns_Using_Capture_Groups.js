// let repeatNum = "42 42 42";
// let reRegex = /(\d+)\s\1\s\1/;  


// // Change this line
// let result1 = reRegex.test(repeatNum);
// let result2 = repeatNum.match(reRegex);
// console.log(result1);
// console.log(result2);

let repeatNum = "42 42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result1 = reRegex.test(repeatNum);
let result2 = repeatNum.match(reRegex);

console.log(result1);
console.log(result2);