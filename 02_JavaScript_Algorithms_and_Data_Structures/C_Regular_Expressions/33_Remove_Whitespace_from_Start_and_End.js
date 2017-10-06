let hello = "   Hello, World! a ";
let wsRegex = /^\s+|\s+$/g;
// Change this line
let result = hello.replace(wsRegex, "");
// Change this line
console.log(result);