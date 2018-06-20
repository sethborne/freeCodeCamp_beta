// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function selectionSort(inputArray) {
    let i = 0;
    while(i < inputArray.length){
        console.log(inputArray[i]);
        // inc at end
        let min = inputArray[i]
        let minIndex = i;
        for(let j = i + 1; j < inputArray.length; j += 1){
            if(inputArray[j] <= min){
                min = inputArray[j]
                minIndex = j
            }
            console.log(`At Loop: ${i} | Inner Loop: ${j} | Current Min: ${min}`);
        }
        // swap
        let tempVal = inputArray[i];
        inputArray[i] = min;
        inputArray[minIndex] = tempVal;
        
        i += 1;
    }
    console.log(inputArray);
    return inputArray;
}

// test array:
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

// loop through array