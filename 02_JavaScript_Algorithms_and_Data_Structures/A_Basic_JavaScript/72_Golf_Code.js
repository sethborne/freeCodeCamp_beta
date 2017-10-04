var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if(strokes == 1){
        return names[0];
    }
    else if(par - 2 >= strokes){
        return names[1];
    }
    else if(par -1 == strokes){
        return names[2];
    }
    else if(par == strokes){
        return names[3];
    }
    else if(par + 1 == strokes){
        return names[4];
    }
    else if(par + 2 == strokes){
        return names[5];
    }
    else if(par + 3 <= strokes){
        return names[6];
    }
    else{
        return "Catch All";
    }
    // Only change code above this line
}

// Change these values to test
golfScore(5, 4);