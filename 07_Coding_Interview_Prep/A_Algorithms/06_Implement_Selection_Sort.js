function selectionSort(array) {
    // change code below this line
    let min = Infinity;
    let minIndex;
    let i = 0;
    while(i < array.length){
        for(let j = i; j < array.length; j += 1){
            if(array[i] < min){
                min = array[i];
                minIndex = i;
            }
        }
        if(minIndex !== i){
            // swap
            i += 1;
        }
        else{
            // dont swap
            i += 1;
        }
    }
    // change code above this line
    return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]