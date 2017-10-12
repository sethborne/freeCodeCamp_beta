function uniteUnique(inputParams) {
    let inputArray = Array.from(arguments);
    let uniqueArray = [];
    console.log(inputArray);
    for(let x = 0; x < inputArray.length; x += 1){
        console.log(`${x} | ${inputArray[x]}`);
        for(let y = 0; y < inputArray[x].length; y += 1){
            console.log(`${x} | ${inputArray[x]} | ${y} | ${inputArray[x][y]}`);
            let valExists = false;
            for(let u = 0; u < uniqueArray.length; u += 1){
                console.log(`${x} | ${inputArray[x]} | ${y} | ${inputArray[x][y]}`);
                console.log(valExists);
                if(uniqueArray[u] === inputArray[x][y]){
                    valExists = true;
                }
            }
            if(!valExists){
                uniqueArray.push(inputArray[x][y]);
            }
        }
    }
    console.log(uniqueArray);
    return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);