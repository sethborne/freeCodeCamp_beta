function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break; 
        case 4:
            answer = "delta";
            break;
        default:
            answer = "Out of Range";
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));


