//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    // The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
    for(let i = 0; i < contacts.length; i += 1){
        console.log(i);
        if(name === contacts[i]["firstName"]){
            console.log("Yes, there is a Name.");
            if(contacts[i].hasOwnProperty(prop)){
                console.log("Yes, there is a Property");
                console.log(contacts[i][prop]);
                return contacts[i][prop];
            }
            else{
                console.log("No such property");
                return "No such property";
            }
        }
    }
    console.log("No such contact");
    return "No such contact";
    
    // If both are true, then return the "value" of that property.
    // If name does not correspond to any contacts then return "No such contact"
    // If prop does not correspond to any valid properties of a contact found to match name then return "No such property"
    // Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
// should return ["Pizza", "Coding", "Brownie Points"]

lookUpProfile("Kristian", "lastName");
// should return "Vos"

lookUpProfile("Sherlock", "likes");
// should return ["Intriguing Cases", "Violin"]

lookUpProfile("Harry","likes");
// should return an array

lookUpProfile("Bob", "number");
// should return "No such contact"

lookUpProfile("Bob", "potato");
// should return "No such contact"

lookUpProfile("Akira", "address");
// should return "No such property"
