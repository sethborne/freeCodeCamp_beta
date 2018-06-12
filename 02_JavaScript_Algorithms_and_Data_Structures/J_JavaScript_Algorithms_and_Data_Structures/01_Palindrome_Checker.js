function palindrome(inputString) {
    // Good luck!
    let lowerCaseInputString = inputString.toLowerCase();
    // get rid of misc chars
    // let regex = /[\W_]/g;
    let regex = /[^A-Za-z0-9]/g
    let finalString = lowerCaseInputString.replace(regex, "")
    console.log(finalString);
    // split by char, reverse the array, join rev string with no spaces.
    let finalStringReversed = finalString.split("").reverse().join("");
    let boolCheck;
    if(finalString === finalStringReversed){
        boolCheck = true;
    } else { 
        boolCheck = false;
    }
    console.log(boolCheck);
    return boolCheck;
}