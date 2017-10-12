function pairElement(inputString) {
    let splitInputString = inputString.split("");
    let finalArray = [];
    let charArray = [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]];
    console.log(splitInputString);
    for(let i = 0; i < splitInputString.length; i += 1){
        for(let j = 0; j < charArray.length; j += 1){
            if(splitInputString[i] == charArray[j][0]){
                finalArray.push(charArray[j]);
            }
        }
    }
    console.log(finalArray);
    return finalArray;
}

pairElement("GCG");