function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    // filter collection, for each item, has property source, if so, push to arr
    let searchKey = Object.keys(source);
    console.log(searchKey);
    let increment = 0;
    let value = collection.filter( (collectionIndexObj) => 
        {
            increment += 1;
            console.log(`At Loop: ${increment}`);
            
            // searchKey.forEach( (key) => 
            //     {
            //         console.log(key);
            //         console.log(`source Array Value: ${source[key]} | collection Value: ${collectionIndexObj[key]}`);
            //         if(!collectionIndexObj.hasOwnProperty(searchKey[key]) || source[searchKey[key]] !== collectionIndexObj[searchKey[key]]){
            //             console.log("No Key");
            //             return false;
            //         }
            //     }
            // )
            for(let key = 0; key < searchKey.length; key += 1){
                if(!collectionIndexObj.hasOwnProperty(searchKey[key]) || source[searchKey[key]] !== collectionIndexObj[searchKey[key]]){
                    return false;
                }
            }
            return true;
        }
    )

    // Only change code above this line
    console.log(value);
    return value;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]