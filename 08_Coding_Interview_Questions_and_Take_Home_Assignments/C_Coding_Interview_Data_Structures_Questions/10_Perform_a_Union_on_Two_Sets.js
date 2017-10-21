function Set() {
    // the var collection will hold the set
    let collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function () {
        return collection;
    };
    // this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function(){
        if(collection.length > 0){
            return collection.length;
        }
        else{
            return "The collection has No Values";
        }
    };
    // change code below this line
    this.union = function(setB){
        let unionSet = new Set();
        let originSet = this.values();
        console.log(originSet);
        let secondSet = setB.values();
        console.log(secondSet);
        originSet.forEach( (val) => { unionSet.add(val) });
        secondSet.forEach( (val2) => { unionSet.add(val2)} );
        // console.log(unionSet.values());
        return unionSet;
    };
    // change code above this line
}

let newSetA = new Set();
newSetA.add(1);
newSetA.add(2);
newSetA.add(3);
newSetA.add(4);
newSetA.add(5);
let newSetB = new Set();
newSetB.add(3);
newSetB.add(4);
newSetB.add(5);
newSetB.add(6);
newSetB.add(7);
console.log(newSetA.values());
console.log(newSetB.values());
console.log(newSetA.union(newSetB).values());
