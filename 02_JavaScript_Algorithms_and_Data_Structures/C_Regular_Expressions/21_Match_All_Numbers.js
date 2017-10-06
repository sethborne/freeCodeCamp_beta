let numString = "Your sandwich will be $5.00";
let numRegex = /\d/gi; 
// Change this line
let result = numString.match(numRegex).length;