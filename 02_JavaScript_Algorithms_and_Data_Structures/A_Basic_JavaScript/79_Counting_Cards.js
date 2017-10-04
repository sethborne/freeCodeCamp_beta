var count = 0;

function cc(card) {
    // Only change code below this line
    switch(card){
        case 2:
            count += 1;
            break;
        case 3:
            count += 1;
            break;
        case 4:
            count += 1;
            break;
        case 5:
            count += 1;
            break;
        case 6:
            count += 1;
            break;
        case 7:
            count += 0;
            break;
        case 8:
            count += 0;
            break;
        case 9:
            count += 0;
            break;
        case 10:
            count -= 1;
            break;
        case 'J':
            count -= 1;
            break;
        case 'Q':
            count -= 1;
            break;
        case 'K':
            count -= 1;
            break;
        case 'A':
            count -= 1;
            break;
        default:
            console.log("Nope");
            break;
    }
    if(count > 0){
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); 
cc(3);
cc(7);
cc('K');
cc('A');
console.log(count);