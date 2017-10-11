function translatePigLatin(inputString) {
    // need to loop and find index of first vowel
    // let regex = /[^aeiou]/;
    let regex = ["a", "e", "i", "o", "u"];
    let isIndexFound = false;
    let firstVowelIndex = undefined;
    for(var i = 0; i < inputString.length; i += 1){
        console.log(inputString.charAt(i));
        let theChar = inputString.charAt(i);
        if(regex.indexOf(theChar) != -1 ){
            console.log("                ");
            isIndexFound = true;
            firstVowelIndex = i;
            break;
        }
    }
    console.log(firstVowelIndex);
    if(firstVowelIndex === 0){
        inputString += "way";
    }
    else if(firstVowelIndex > 0){
        let cutLetters = inputString.slice(0, firstVowelIndex);
        console.log(cutLetters);
        let cutString = inputString.slice(firstVowelIndex);
        console.log(cutString);
        inputString = cutString + cutLetters + "ay";
    }
    else{
        // inputString += "ay";
        inputString = inputString + "ay";
    }
    console.log(inputString);
    return inputString;
}

translatePigLatin("consonant");

translatePigLatin("california")
// should return "aliforniacay".
translatePigLatin("paragraphs")
// should return "aragraphspay".
translatePigLatin("glove")
// should return "oveglay".
translatePigLatin("algorithm")
// should return "algorithmway".
translatePigLatin("eight")
// should return "eightway".
translatePigLatin("rhythm")