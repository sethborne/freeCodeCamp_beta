// In the next few exercises we are going to create a function to emulate a data structure called a "Set". A Set is like an array, but it cannot contain duplicate values. The typical use for a Set is to simply check for the presence of an item. This can be implemented with an object, for instance:

// var set = new Object();
// set.foo = true;
// // See if foo exists in our set:
// console.log(set.foo) // true
// In the next few exercises, we will build a full featured Set from scratch.

// For this exercise, create a function that will add a value to our set collection as long as the value does not already exist in the set. For example:

// this.add = function(element) {
// //some code to add value to the set
// }
// The function should return true if the value is successfully added and false otherwise.

function Set() {
    // the var collection will hold our set - this is a private variable
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    this.add = function(item){
        let exists = collection.findIndex(arrItem => arrItem === item)
        if(exists === -1){
            collection.push(item)
            return true
        } 
        else {
            return false
        }
    }
    // change code above this line
}

let newSet = new Set();
console.log(newSet.add(10));
console.log(newSet.add(10));
console.log(newSet.add(5));
console.log(newSet.add(2));
console.log(newSet.add(5));
console.log(newSet.values());
let newSet2 = new Set();
console.log(newSet2.add(15));
console.log(newSet2.add(20));
console.log(newSet2.add(25));
console.log(newSet2.add(30));
console.log(newSet2.values());