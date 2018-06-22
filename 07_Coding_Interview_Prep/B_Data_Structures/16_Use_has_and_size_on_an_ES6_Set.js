function checkSet(arrToBeSet, checkValue) {

    // change code below this line
    let setToCheck = new Set(arrToBeSet);
    let valCheck = setToCheck.has(checkValue);
    return [valCheck, checkValue]
    // change code above this line

}

checkSet([1, 2, 3], 2); // Should return [ true, 3 ]