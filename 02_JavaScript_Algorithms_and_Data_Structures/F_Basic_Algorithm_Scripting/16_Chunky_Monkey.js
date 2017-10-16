function chunkArrayInGroups(inputArray, numValSize) {
    // Break it up.
    let newArrayTemp = [];
    let newArray = [];
    let count = 0;
    let i = 0;
    // let j = 0;
    
    while(i < inputArray.length){
        console.log(`while i: ${i} | count: ${count}`);
        if(count < numValSize && i !== inputArray.length - 1){
            newArrayTemp.push(inputArray[i]);
            console.log(`if i: ${i} | count: ${count} | newArrayTemp: ${newArrayTemp}`);
            console.log("");
            i += 1;
            count += 1;
        }
        else if(count === numValSize){
            newArray.push(newArrayTemp);
            newArrayTemp = [];
            // j += 1;
            // i += 1;
            console.log(`else if i: ${i} | count: ${count}`);
            console.log("");
            count = 0;
        }
        else if(count < numValSize && i === inputArray.length - 1){
            newArrayTemp.push(inputArray[i]);
            newArray.push(newArrayTemp);
            break;
        }
    }
    console.log(newArray);
    return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);