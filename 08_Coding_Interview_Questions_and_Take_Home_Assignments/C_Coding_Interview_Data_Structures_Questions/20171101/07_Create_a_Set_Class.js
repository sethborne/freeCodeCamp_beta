function Set() {
    // the var collection will hold our set
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
    // For this exercise, create a function that will add a value to our set collection as long as the value does not already exist in the set
    this.add = function(element){
        let foundElement = false;
        if(collection.length > 0){
            for(let i = 0; i < collection.length; i += 1){
                if(collection[i] === element){
                    foundElement = true;
                }
            }
            if(!foundElement){
                collection[collection.length] = element;
                return true;
            }
            else{
                return false;
            }
        }
        else{
            collection[0] = element;
            return true;
        }
    }
    // change code above this line
}

let newSet = new Set();
console.log(newSet.add(1));
// newSet.add(2);
console.log(newSet.add(2));
newSet.add(3);
newSet.add(4);
console.log(newSet.values());