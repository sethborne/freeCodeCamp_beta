function checkPositive(arr) {
    // Add your code below this line
    return arr.some((arrItem) => (arrItem >= 0));
    // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]));