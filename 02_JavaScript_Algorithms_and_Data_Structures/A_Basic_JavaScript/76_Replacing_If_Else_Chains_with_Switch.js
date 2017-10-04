function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case 1:
            answer = "There is no #1";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case "bob":
            answer = "Marley";
            break;
        default:
            answer = "";
            break;
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
console.log(chainToSwitch(1));
console.log(chainToSwitch(7));
console.log(chainToSwitch(42));
console.log(chainToSwitch(99));
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(5));