function steamrollArray(inputArray) {
    // I'm a steamroller, baby
    let newArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        // if true
        if(Array.isArray(inputArray[i])){
            // just call it again
            let innerArray = steamrollArray(inputArray[i])
            newArray = newArray.concat(innerArray)
        }
        else {
            newArray.push(inputArray[i]);
        }
    }
    // inputArray = newArray;
    console.log(newArray);
    return newArray;
}

steamrollArray([[["a"]], [["b"]]]);
// should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]);
// should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]);
// should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]);
// should return [1, {}, 3, 4]