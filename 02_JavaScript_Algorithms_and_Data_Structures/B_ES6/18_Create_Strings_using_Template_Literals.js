// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
// };
// // change code below this line
// const resultDisplay = `${result.failure[0]}, ${result.failure[1]}, ${result.failure[2]}`;
// // change code above this line
// console.log(resultDisplay);

// /**
// * should look like this
// * <li class="text-warning">no-var</li>
// * <li class="text-warning">var-on-top</li>
// * <li class="text-warning">linebreak</li>
// **/


// NEW

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";
    
    // change code below this line
    
    // console.log(`${arr[0]}`);
    console.log(arr);
    
    const resultDisplayArray = arr.map((item) => {
        return `<li class="text-warning">${item}</li>`;
    });
    
    // change code above this line
    // console.log(resultDisplayArray);
    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);