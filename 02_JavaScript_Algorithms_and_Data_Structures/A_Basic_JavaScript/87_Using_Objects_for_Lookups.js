// Setup
function phoneticLookup(val) {
    // Only change code below this line
    var result = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = result[val];
    // Only change code above this line
    return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));
