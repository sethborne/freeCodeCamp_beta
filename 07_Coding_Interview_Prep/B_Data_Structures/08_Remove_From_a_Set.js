// In this exercises we are going to create a delete function for our set. The function should be named this.remove. This function should accept a value and check if it exists in the set. If it does, remove that value from the set, and return true. Otherwise, return false.

function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // change code below this line
    this.remove = function(element){
        let removeIndex = collection.findIndex(item => item === element);
        if(removeIndex !== -1){
            // then I can remove
            let removeItem = collection.splice(removeIndex, 1);
            return removeItem;
        }
        else{
            return null;
        }
    }
    // change code above this line
}

let newSet = new Set();
newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);
newSet.add(5);
console.log(newSet.has(1));
console.log('5', newSet.remove(5));
// newSet.printCollection();
console.log(newSet.remove(4));
// newSet.printCollection();