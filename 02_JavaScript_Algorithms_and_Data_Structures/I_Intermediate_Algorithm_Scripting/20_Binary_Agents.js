function binaryAgent(inputString) {
    let splitInputString = inputString.split(" ");
    for(let i = 0; i < splitInputString.length; i += 1){
        let stringSum = 0;
        for(let j = splitInputString[i].length - 1; j >=0; j -= 1){
            // 7 6 5 4 3 2 1
            // console.log(splitInputString[i].charAt(j));
            if(j == 7 && splitInputString[i].charAt(j) == 1){
                // console.log("");
                stringSum += 1;
            }
            else if(j == 6 && splitInputString[i].charAt(j) == 1){
                stringSum += 2;
            }
            else if(j == 5 && splitInputString[i].charAt(j) == 1){
                stringSum += 4;
            }
            else if(j == 4 && splitInputString[i].charAt(j) == 1){
                stringSum += 8;
            }
            else if(j == 3 && splitInputString[i].charAt(j) == 1){
                stringSum += 16;
            }
            else if(j == 2 && splitInputString[i].charAt(j) == 1){
                stringSum += 32;
            }
            else if(j == 1 && splitInputString[i].charAt(j) == 1){
                stringSum += 64;
            }
            else if(j == 0 && splitInputString[i].charAt(j) == 1){
                stringSum += 128;
            }
            else{
                
            }
        }
        stringChar = String.fromCharCode(stringSum);
        splitInputString[i] = stringChar;
    }
    inputString = splitInputString.join("");
    console.log(inputString);
    return inputString;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");