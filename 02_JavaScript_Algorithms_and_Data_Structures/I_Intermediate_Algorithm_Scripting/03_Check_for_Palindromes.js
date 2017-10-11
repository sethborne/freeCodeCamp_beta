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
    } else { boolCheck = false; }
    console.log(boolCheck);
    return boolCheck;
}

palindrome("eye");
palindrome("_eye")
palindrome("race car")
// should return true.
palindrome("not a palindrome")
// should return false.
palindrome("A man, a plan, a canal. Panama")
// should return true.
palindrome("never odd or even")
// should return true.
palindrome("nope")
// should return false.
palindrome("almostomla")
// should return false.
palindrome("My age is 0, 0 si ega ym.")
// should return true.
palindrome("1 eye for of 1 eye.")
// should return false.
palindrome("0_0 (: /-\ :) 0-0")
// should return true.
palindrome("five|\_/|four")
// should return false.