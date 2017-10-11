function nonMutatingPush(original, newItem) {
    // Add your code below this line
    let tempArray = [...original];
    tempArray = tempArray.concat(newItem);
    return tempArray;
    // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));
