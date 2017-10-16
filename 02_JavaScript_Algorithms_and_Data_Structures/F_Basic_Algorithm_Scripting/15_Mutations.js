function mutation(inputArray) {
    let containsAll = inputArray[1].toLowerCase().split("");
    // console.log(containsAll);
    let testString = inputArray[0].toLowerCase().split("");
    // console.log(testString);
    let truthCount = 0;
    for(let i = 0; i < containsAll.length; i += 1){
        for(let j = 0; j < testString.length; j += 1){
            // console.log(`loop i: ${i} | loop j: ${j} | loop i val: ${containsAll[i]} | loop j val: ${testString[j]} | truthCount: ${truthCount}`);
            if(containsAll[i] === testString[j]){
                truthCount += 1;
                break;
            }
        }
    }
    
    if(truthCount === containsAll.length){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
    
    // console.log(inputArray);
    // return inputArray;
}

mutation(["hello", "hey"])
// should return false.

mutation(["hello", "Hello"])
// should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
// should return true.

mutation(["Mary", "Army"])
// should return true.

mutation(["Mary", "Aarmy"])
// should return true.

mutation(["Alien", "line"])
// should return true.

mutation(["floor", "for"])
// should return true.

mutation(["hello", "neo"])
// should return false.

mutation(["voodoo", "no"])
// should return false.