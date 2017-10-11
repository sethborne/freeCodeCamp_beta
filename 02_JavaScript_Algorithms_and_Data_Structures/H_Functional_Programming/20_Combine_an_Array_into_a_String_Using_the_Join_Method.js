function sentensify(str) {
    // Add your code below this line
    var fixString = str.split(/[^\w]|_/g);
    str = fixString.join(" ");
    return str;
    // Add your code above this line
}

console.log(sentensify("May-the-force-be-with-you"));