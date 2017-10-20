// In this exercises we are going to create a delete function for our set. The function should be named this.remove. This function should accept a value and check if it exists in the set. If it does, remove that value from the set, and return true. Otherwise, return false.

function Set() {
    // the var collection will hold the set
    this.collection = [];
    this.printCollection = function() {
        console.log(this.collection);
    };
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (this.collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return this.collection;
    };
    // change code below this line
    // this method will add an element to the set
    this.add = (element) => {
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(value){
        if(this.has(value)){
            let indexToRemove = this.collection.indexOf(value);
            console.log(indexToRemove);
            this.collection.splice(indexToRemove, 1);
            return true;
        }
        else{
            return false;
        }
    };
    // change code above this line
}

let newSet = new Set();
newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);
newSet.add(5);
console.log(newSet.has(1));
newSet.remove(5);
newSet.printCollection();
newSet.remove(4);
newSet.printCollection();