function updateInventory(currentInventory, newStock) {
    // All inventory must be accounted for or you're fired!
    // idea would be to check if the second array has a length, if not return first else unshift the first item, search for the index of the of the item.  with index, increment the count.
    if(!newStock.length){
        return currentInventory
    }
    if(!currentInventory.length){
        newStock.forEach(item => {
            currentInventory.push(item)
        });
    }
    else{
        // have to search then return.
        for(let i = 0; i < newStock.length; i += 1){
            let indexToFind = currentInventory.findIndex((item) => item[1] === newStock[i][1])
            if(indexToFind !== -1){
                // FOUND THE ITEM - so increment Quantity
                currentInventory[indexToFind][0] += newStock[i][0];
            }
            else {
                currentInventory.push(newStock[i])
                // here find correct alphabetical position idead is to find the index where the first char of the string is greater than
            }
        }
    }
    currentInventory = currentInventory.sort((a, b) => a[1][0] > b[1][0])
    // console.log(currentInventory);
    return currentInventory;
}

// updateInventory( [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
// should return an array with a length of 6.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) )
// should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])) 
// should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) )
// should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].