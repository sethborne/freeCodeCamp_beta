var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Add your code below this line
    // let tempArray = [...arr];
    // tempArray = tempArray.sort((a, b) => (a > b));
    let tempArray = [...arr].concat().sort((a, b) => (a > b));
    return tempArray;
    // Add your code above this line
}
nonMutatingSort(globalArray);