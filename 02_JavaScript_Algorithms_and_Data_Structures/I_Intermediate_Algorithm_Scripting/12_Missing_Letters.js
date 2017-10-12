function fearNotLetter(inputString) {
    let search = "abcdefghijklmnopqrstuvwxyz";
    let splitInputString = inputString.split("");
    // console.log(splitInputString);
    // start index
    let length = splitInputString.length - 1;
    // console.log(length);
    let startChar = search.indexOf(splitInputString[0]);
    let endChar = startChar + length;
    console.log(`startChar: ${startChar} | endChar: ${endChar}`);
    let isMissing = false;
    let brokeAtChar = "";
    for(let i = 0; i < splitInputString.length; i += 1){
        if(splitInputString[i] !== search.charAt(startChar)){
            console.log(`Broke At: ${search.charAt(startChar)}`);
            brokeAtChar = search.charAt(startChar);
            isMissing = true;
            break;
        } else {
            startChar += 1;
        }
    }
    if(isMissing){
        return brokeAtChar;
    }
    else{
        return undefined;
    }
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno") 
// should return "i".
fearNotLetter("stvwx") 
// should return "u".
fearNotLetter("bcdf")
// should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz")
// should return undefine