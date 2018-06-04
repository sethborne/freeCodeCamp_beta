// const greeting = 'itadakimasu';
// // change code below this line
// const length = greeting.length; 

// // change this
// // change code above this line
// console.log(length); // should be using destructuring

// NEW

function getLength(str) {
    "use strict";

    // change code below this line
    // const length = 0; 
    
    // const length = { strLen: str.length }
    // console.log(length);
    // const { strLen: len } = length;
    
    const { length: len } = str;
    
    // change this
    // change code above this line

    return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));

var voxel = {x: 3.6, y: 7.4, z: 6.54 };
const { a, y, c } = voxel; // x = 3.6, y = 7.4, z = 6.54
console.log(a);
console.log(y);
console.log(c);