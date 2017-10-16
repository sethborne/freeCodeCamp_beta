function titleCase(inputString) {
    inputString = inputString.toLowerCase();
    let splitInputString = inputString.split(" ");
    for(let i = 0; i < splitInputString.length; i += 1){
        secSplitInputString = splitInputString[i].split("");
        secSplitInputString[0] = secSplitInputString[0].toUpperCase();
        // console.log(secSplitInputString);
        splitInputString[i] = secSplitInputString.join("");
    }
    console.log(splitInputString);
    inputString = splitInputString.join(" ");
    return inputString;
}
console.log(titleCase("I'm a little tea pot"));

console.log(titleCase("sHoRt AnD sToUt"));

// should return Short And Stout.