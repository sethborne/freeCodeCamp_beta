function myReplace(inputString, before, after) {
    var splitInputString = inputString.split(" ");
    console.log(splitInputString);
    for(let i = 0; i < splitInputString.length; i += 1){
        if(splitInputString[i] == before){
            let firstChar = before.charAt(0);
            let regex = /[A-Z]/;
            let isCharCap = regex.test(firstChar);
            console.log(isCharCap);
            console.log(firstChar);
            if(isCharCap){
                after = after.split("");
                after[0] = after[0].toUpperCase();
                after = after.join("");
                splitInputString[i] = after;
                
            } else {
                splitInputString[i] = after;
            }
            // if(before.charAt(0))
        }
    }
    inputString = splitInputString.join(" ");
    console.log(inputString);
    return inputString;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");