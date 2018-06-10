// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.


// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

function getFinalOpenedDoors (numDoors) {
    // Good luck!
    var doorArray = [];
    for(let d = 0; d < numDoors; d += 1){
        doorArray[d] = "closed";
    }
    // change Array
    // console.log(doorArray);
    let incr = 1;
    while(incr <= doorArray.length){
        for(let i = incr - 1; i <= doorArray.length; i += incr){
            // console.log(`At loop i: ${i} | At loop j: ${incr} | doorArrayVal: ${doorArray[i]}`);
            if(doorArray[i] === "closed"){
                doorArray[i] = "open";
            }
            else if(doorArray[i] === "open"){
                doorArray[i] = "closed";
            }
            // console.log(`At loop i: ${i} | At loop j: ${incr} | doorArrayValChanged: ${doorArray[i]}`);
        }
        incr += 1;
    }
    // final Array
    let finalArray = [];
    for(let f = 0; f < doorArray.length; f += 1){
        if(doorArray[f] === "open"){
            finalArray.push(f + 1);
        }
    }
    console.log(finalArray);
    return finalArray;
}

getFinalOpenedDoors(10);
// should return [1, 4, 9]
getFinalOpenedDoors(100);
// should return [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]