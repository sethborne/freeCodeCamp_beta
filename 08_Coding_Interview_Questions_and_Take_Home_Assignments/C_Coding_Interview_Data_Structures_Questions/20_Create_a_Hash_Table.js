var called = 0;
var hash = (string) => {
    called++;
    var hash = 0;
    for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
    return hash;
};
var HashTable = function () {
    this.collection = {};
    // change code below this line
    // Create these three methods: add, remove, and lookup
    // add
    this.add = function(key, value){
        let hashedKey = hash(key);
        console.log(hashedKey);
        if(!this.collection[hashedKey]){
            this.collection[hashedKey] = [value];
        }
        else{
            this.collection[hashedKey][this.collection[hashedKey].length] = value;
            console.log(this.collection[hashedKey].length);
            console.log("COLLISION");
            console.log(this.collection[hashedKey]);
        }
    };
    // remove
    this.remove = function(key){
        let hashedKey = hash(key);
        if(hashedKey in this.collection){
            delete this.collection[hashedKey];
        }
    };
    // lookup
    this.lookup = function(key){
        let hashedKey = hash(key);
        if(hashedKey in this.collection){
            console.log(this.collection[hashedKey]);
            return this.collection[hashedKey];
        }
        else{
            return null;
        }
    };
    // change code above this line
};

let newHashTable = new HashTable();
newHashTable.add("firstName", "Seth");
console.log(newHashTable.collection);
newHashTable.add("firstName", "Log This");
console.log(newHashTable.collection);
newHashTable.add("lastName", "Borne");
console.log(newHashTable.collection);
newHashTable.remove("lastName", "Borne");
console.log(newHashTable.collection);
console.log(newHashTable.lookup("firstName", "Seth"));
console.log(newHashTable.lookup("lastName", "Borne"));
console.log(newHashTable.collection[937][1]);