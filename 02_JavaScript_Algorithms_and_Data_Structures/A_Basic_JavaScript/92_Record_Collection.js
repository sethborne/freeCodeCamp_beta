// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Only change code below this line
function updateRecords(id, prop, value) {
    // If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
    if (prop !== 'tracks' && value !== "") {
        collection[id][prop] = value;
    }

    if (prop === 'tracks' && collection[id][prop] === undefined) {
        collection[id][prop] = [];
    }

    if (prop === 'tracks') {
        let track = collection[id][prop];
        track.push(value);
    }

    if (value === "") {
        delete collection[id][prop];
    }
    console.log(collection);
    console.log("");
    return collection;
}
// Alter values below to test your code

// updateRecords(5439, "artist", "ABBA")
// artist should be "ABBA"

// updateRecords(5439, "tracks", "Take a Chance on Me")
// tracks should have "Take a Chance on Me" as the last element.

// updateRecords(2548, "artist", "")
// artist should not be set

updateRecords(1245, "tracks", "Addicted to Love")
// tracks should have "Addicted to Love" as the last element.

// updateRecords(2468, "tracks", "Free")
// tracks should have "1999" as the first element.

// updateRecords(2548, "tracks", "")
// tracks should not be set

// updateRecords(1245, "album", "Riptide")
// album should be "Riptide"