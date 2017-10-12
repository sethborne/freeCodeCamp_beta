function sumFibs(numVal) {
    // build fib array
    let fibArray = [ 0, 1 ]
    let prev = 0;
    let current = 1;
    let fibArraySum;
    let finalSum = 0;
    
    // based on numVal, return a quick exit if certain value, else, construct the fibArray for summing;
    if( numVal <= 2){
        if(numVal <= -1){
            console.log("Invalid Input, Please Enter a Positive Number");
        }
        else if(numVal == 0){
            finalSum = 0;
            // console.log(`Final Sum is: ${finalSum}`);
        }
        else if(numVal == 1){
            finalSum = 1;
            // console.log(`Final Sum is: ${finalSum}`);
        }
        else if(numVal == 2){
            finalSum = 2;
            // console.log(`Final Sum is: ${finalSum}`);
        }
    } 
    else{
        while(current < numVal){
            fibArraySum = prev + current;
                //swap
                prev = current;
                current = fibArraySum;
            fibArray.push(fibArraySum);
        }
    }
    // console.log(fibArray);
    // sum the constructed array
    if(numVal > 2){
        for(let i = 0; i < fibArray.length; i += 1){
            if(fibArray[i] % 2 == 1 && fibArray[i] <= numVal){
                finalSum += fibArray[i];
            }
        }
    }
    console.log(finalSum);
    return finalSum;
}

sumFibs(4);

sumFibs(1)
// should return a number.
sumFibs(1000)
// should return 1785.
sumFibs(4000000)
// should return 4613732.
sumFibs(4)
// should return 5.
sumFibs(75024)
// should return 60696.