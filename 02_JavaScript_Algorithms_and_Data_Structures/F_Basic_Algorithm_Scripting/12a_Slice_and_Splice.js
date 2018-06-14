// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let addArray = arr2.slice();
    console.log(addArray);
    let a = 0;
    let b = 1
    for(let i = 0; i < arr1.length; i += 1){
        addArray.splice(n, 0, arr1.slice(a, b)[0])
        a += 1;
        b += 1;
        n += 1;
    }
    console.log(addArray);
    return addArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// [ 4, 1, 2, 3, 5, 6 ]
console.log(frankenSplice([1, 2, 3], [4, 5], 1) );
// should return [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1));
// should return ["a", 1, 2, "b"].