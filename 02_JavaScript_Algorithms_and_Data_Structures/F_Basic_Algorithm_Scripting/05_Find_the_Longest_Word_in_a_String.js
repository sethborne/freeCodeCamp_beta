function findLongestWordLength(str) {
    let splitStr = str.split(" ");
    let longestStr = splitStr[0];
    for(let i = 1; i < splitStr.length; i += 1){
        if(splitStr[i].length > longestStr.length){
            longestStr = splitStr[i];
        }
    }
    return longestStr.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));