function Dog(name) {
    this.name = name;
}

// Modify the code below this line
Dog.prototype = {
    // define constructor:
    constructor: Dog,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};