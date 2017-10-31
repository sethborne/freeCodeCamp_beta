function largestPrimeFactor(inputNumVal) {
    // Good luck!
    let primeArray = [];
    for(let i = 2; i <= inputNumVal; i += 1){
        if(i === 2){
            primeArray.push(i)
        }
        // don't worry about other evens
        // odds
        else if( i % 2 === 1){
            let isPrime = true;
            for(let j = 0; j < primeArray.length; j += 1){
                if(i % primeArray[j] === 0){
                    isPrime = false;
                }
            }
            if(isPrime){
                primeArray.push(i)
            }
        }
    }
    let factorArray = [];
    for(let f = 0; f < primeArray.length; f += 1){
        if(inputNumVal % primeArray[f] === 0){
            factorArray.push(primeArray[f]);
        }
    }
    console.log(factorArray[factorArray.length - 1]);
    return factorArray[factorArray.length - 1];
}
largestPrimeFactor(2);
// should return 2.
largestPrimeFactor(3);
// should return 3.
largestPrimeFactor(5);
// should return 5.
largestPrimeFactor(7);
// should return 7.
// largestPrimeFactor(50);
largestPrimeFactor(13195);
// should return 29.
largestPrimeFactor(600851475143);