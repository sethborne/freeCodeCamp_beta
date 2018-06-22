var Map = function () {
    this.collection = {};
    this.count = 0;
    // change code below this line
    // add accepts a key, value pair to add to the map
    this.add = function(key, value){
        this.collection[key] = value;
        this.count += 1;
        // console.log(this.collection);
    };
    // remove accepts a key and removes the associated key, value pair
    this.remove = function(key){
        if(key in this.collection){
            delete this.collection[key];
            this.count -= 1;
        }
    };
    // get accepts a key and returns the stored value
    this.get = function(key){
        if(key in this.collection){
            return this.collection[key];
        }
    };
    // has returns a boolean for the presence or absence of an item
    this.has = function(key){
        if(key in this.collection){
            return true;
        }
        else{
            return false;
        }
    };
    // values returns an array of all the values in the map
    this.values = function(){
        let valArray = [];
        for(key in this.collection){
            valArray.push(this.collection[key]);
        }
        return valArray;
    };
    // size returns the number of items in the map
    this.size = function(){
        return this.count;
    };
    // clear empties the map
    this.clear = function(){
        this.collection = {};
        this.count = 0;
        // return this.collection;
    };
    // change code above this line
};

var Map = function() {
    this.collection = {};
        // change code below this line
        // change code above this line
        this.add = function(key, value){
        this.collection[key] = value;
    }
    this.remove = function(key, value){
        if(this.collection[key]){
            delete this.collection[key];
        }
        else {
            return null
        }
    }
    this.get = function(key){
        return this.collection[key]
    }
    this.has = function(key){
        return this.collection[key] ? true : false;
    }
    this.values = function(){
        // returns an array of all values
        let newArray = [];
        for(let item in this.collection){
            newArray.push(this.collection[item].toString())
        }
        return newArray;
    }
    this.size = function(){
        let sizeArray = []
        for(let item in this.collection){
            sizeArray.push(item)
        }
        return sizeArray.length
    }
    this.clear = function(){
        this.collection = []
    }
};

let newMap = new Map();
// newMap.add({firstName: "Seth"});
newMap.add("firstName", "Seth");
newMap.add("lastName", "Borne");
console.log(newMap.has("firstName"));
console.log(newMap.collection);
console.log(newMap.size());
console.log(newMap.values());
console.log(newMap.get("firstName"));
newMap.remove("lastName", "Borne");
console.log(newMap.collection);
newMap.clear();
console.log(newMap.collection);

