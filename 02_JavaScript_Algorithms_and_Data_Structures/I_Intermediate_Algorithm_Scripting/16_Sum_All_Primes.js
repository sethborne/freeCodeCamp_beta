function sumPrimes(numVal) {
    // sum all prime numbers less than and including the provided number.
    // make a prime array
    let primeArray = [];
    let finalSum = 0;
    if(numVal < 2){
        finalSum = 0;
        console.log(`There are no prime numbers less than 2`);
    }
    else{
        // every val from 2 up
        for(let i = 2; i <= numVal; i += 1){
            if(i == 2){
                primeArray.push(i);
            }
            else if(i % 2 == 0){
                
            }
            else if(i % 2 == 1){
                let isPrime = true;
                for(let j = 0; j < primeArray.length; j += 1){
                    // console.log(`i: ${i} | primeArray[j]: ${primeArray[j]} | isPrime: ${isPrime}`);
                    if(i % primeArray[j] === 0){
                        // then it is prime
                        isPrime = false;
                    }
                }
                if(isPrime){
                    primeArray.push(i)
                    // isPrime = false;
                }
            }
        }
    }
    // now sum
    for(let s = 0; s < primeArray.length; s += 1){
        finalSum += primeArray[s];
    }
    // console.log(primeArray);
    console.log(finalSum);
    return finalSum;
}

sumPrimes(43);
sumPrimes(977)