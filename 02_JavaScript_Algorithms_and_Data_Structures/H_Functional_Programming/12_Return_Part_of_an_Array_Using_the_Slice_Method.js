function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    let spliceArray;
    spliceArray = anim.slice(beginSlice, endSlice);
    return spliceArray;
    // Add your code above this line
}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

sliceArray(inputAnim, 1, 3);
console.log(sliceArray(inputAnim, 1, 3));