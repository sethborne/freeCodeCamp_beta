// let ohStr = "Ohhh no";
let ohStr = "Ohhhhhhh no";
let ohRegex = /Oh{3,6} no/;
// Change this line
let result = ohRegex.test(ohStr);
console.log(result);