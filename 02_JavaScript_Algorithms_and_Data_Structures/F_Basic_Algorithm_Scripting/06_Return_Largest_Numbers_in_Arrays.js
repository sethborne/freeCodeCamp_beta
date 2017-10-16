function largestOfFour(arr) {
    // You can do this!
    var maxArray = [];
    for(let i = 0; i < arr.length; i += 1){
        let localMax = arr[i][0];
        for(let j = 0; j < arr[i].length; j += 1){
            if(arr[i][j] > localMax){
                localMax = arr[i][j];
            }
        }
        maxArray.push(localMax);
    }
    return maxArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
