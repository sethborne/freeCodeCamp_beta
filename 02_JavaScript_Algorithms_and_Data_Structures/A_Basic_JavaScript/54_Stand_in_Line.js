function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var retItem = arr.shift(0);
    console.log(retItem);
    console.log(arr);
    return retItem;  
    // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));


nextInLine([], 5)
// should return a number
nextInLine([], 1) 
// should return 1
nextInLine([2], 1) 
// should return 2
nextInLine([5,6,7,8,9], 1) 
// should return 5
nextInLine(testArr, 10) 
//testArr[4] should be 10