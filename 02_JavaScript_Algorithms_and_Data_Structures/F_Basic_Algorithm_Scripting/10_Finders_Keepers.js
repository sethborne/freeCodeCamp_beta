function findElement(arr, func) {
    var num = 0;
    for(let i = 0; i < arr.length; i += 1){
        isTrue = func(arr[i]);
        if(isTrue){
            return arr[i];
        }
    }
    return undefined;
}

console.log(findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; }));