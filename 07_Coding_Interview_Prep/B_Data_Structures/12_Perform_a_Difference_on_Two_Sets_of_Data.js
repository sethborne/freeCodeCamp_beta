
function Set() {
    // the var collection will hold the set
    var collection = [];
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
    this.size = function () {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function (otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // change code below this line
    // this method does a difference.
    this.difference = function (otherSet){
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach( item => {
            if(!otherSet.has(item)){
                differenceSet.add(item);
            }
        });
        return differenceSet;
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
console.log(newSetA.difference(newSetB).values());