function dropElements(inputArray, paramFunction) {
    // Drop them elements.
    let foundPushVal = false;
    let validArray = [];
    let pushFromIndexVal = -1;
    for(let i = 0; i < inputArray.length; i += 1){
        foundPushVal = paramFunction(inputArray[i]);
        if(foundPushVal){
            pushFromIndexVal = i;
            break;
        }
    }
    
    if(foundPushVal){
        for(let v = pushFromIndexVal; v < inputArray.length; v += 1){
            validArray.push(inputArray[v]);
        }
    }
    console.log(validArray);
    return inputArray;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
// should return [3, 4]