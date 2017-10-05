// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function () {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());
// // returns 3

// 'use strict';
// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function () {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());
// // returns 2
// // console.log(i);
// // returns "i is not defined"


function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
// only change the code above this line
checkScope();