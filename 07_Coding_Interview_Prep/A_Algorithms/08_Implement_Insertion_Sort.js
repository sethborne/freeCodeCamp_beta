// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

function insertionSort(inputArray) {
    // change code below this line
    let arrayNotSorted = false;
    while(arrayNotSorted === false){
    // while(loopCount < 15){
        let numberSwaps = 0;
        for(let i = 0; i < inputArray.length; i += 1){
            if(inputArray[i + 1] < inputArray[i]){
                // then we swap
                let tempSwap = inputArray[i + 1];
                inputArray[i + 1] = inputArray[i];
                inputArray[i] = tempSwap;
                numberSwaps += 1;
            }
        }
        if(numberSwaps === 0){
            arrayNotSorted = true;
        }
    }
    // change code above this line
    console.log(inputArray);
    return inputArray;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

// while condition (not sorted) run a loop to check pair values and swap