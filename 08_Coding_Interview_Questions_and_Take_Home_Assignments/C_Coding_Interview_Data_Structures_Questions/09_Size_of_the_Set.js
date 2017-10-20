function Set() {
    // the var collection will hold the set
    this.collection = [];
    this.printCollection = function() {
        console.log(this.collection);
    };
    // this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (this.collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function () {
        return this.collection;
    };
    // this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function (element) {
        if (this.has(element)) {
            index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    };
    // change code below this line
    // this method will return the size of the collection
    this.size = function (){
        if(this.collection.length > 0){
            return this.collection.length;
        }
        else{
            return "The collection has No Values";
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
newSet.printCollection();
newSet.remove(5);
newSet.printCollection();
console.log(newSet.size());
