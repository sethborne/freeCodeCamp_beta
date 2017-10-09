// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (cbTimesTwo) {
    var newArray = [];
    // Add your code below this line
    for(let i = 0; i < s.length; i += 1){
        newArray.push(cbTimesTwo(s[i]));
        // console.log(s[i]);
    }
    // Add your code above this line
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});

console.log(new_s);