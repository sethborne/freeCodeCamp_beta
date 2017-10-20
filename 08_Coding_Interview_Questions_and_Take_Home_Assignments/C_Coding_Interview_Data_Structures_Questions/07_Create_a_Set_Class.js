
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
    this.add = (element) => {
        // console.log(element);
        if(collection.indexOf(element) !== -1){
            return false;
        }
        else{
            collection.push(element);
            console.log(collection);
            return true;
        }
    }
    // change code above this line
}

let newSet = new Set();
console.log(newSet.add(10)); 
