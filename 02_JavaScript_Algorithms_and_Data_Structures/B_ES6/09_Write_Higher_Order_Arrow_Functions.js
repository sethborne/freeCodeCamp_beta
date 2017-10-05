const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
// change code below this line
const squaredIntegers = realNumberArray.filter(number => Number.isInteger(number)).map(number => number * number);
// change code above this line
// test your code
console.log(squaredIntegers);