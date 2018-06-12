var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    let splitFullName = fullName.split(" ");
    let first = splitFullName[0];
    let last = splitFullName[1];
    // let firstAndLast = first + " " + last;
    
    
    this.getFirstName = () => {
        return fullName.split(" ")[0];
    };
    this.getLastName = () => {
        return fullName.split(" ")[1];
    };
    this.getFullName = () => {
        return fullName;
    };

    this.setFirstName = (first) => {
        fullName = first + " " + fullName.split(" ")[1];
    };
    this.setLastName = (last) => {
        fullName = fullName.split(" ")[0] + " " + last;
    };
    this.setFullName = (full) => {
        fullName = full;
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

// these test break it...

// var bob = new Person('Bob Ross');
// console.log(bob.getFullName());
// bob.getFullName();
// bob.setFirstName("Haskell")
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.getFirstName());
// console.log(bob.getFirstName());


