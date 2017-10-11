function splitify(str) {
    // Add your code below this line
    var fixString = str.split(/[^\w]|_/g)
    return fixString;
    // Add your code above this line
}

console.log(splitify("Hello World,I-am code"));