function bubbleSort(array) {
    // change code below this line
    let i = 0;
    while(i < array.length){
        if(array[i] > array[i + 1]){
            let tempSwap = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tempSwap;
            i = 0;
            console.log(array);
        }
        else {
            i += 1;
        }
    }
    
    // change code above this line
    return array;
}

// test array:
let test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(bubbleSort(test));