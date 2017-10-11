function sumAll(arr) {
    let sum = 0;
    let lowVal;
    let highVal;
    if(arr[0] > arr[1]){
        highVal = arr[0];
        lowVal = arr[1];
    }
    else{
        highVal = arr[1];
        lowVal = arr[0];
    }
    for(let i = lowVal; i <= highVal; i += 1){
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);
console.log(sumAll([1, 4]));