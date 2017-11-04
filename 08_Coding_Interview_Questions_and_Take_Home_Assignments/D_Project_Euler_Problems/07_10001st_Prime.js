// noprotect
function euler7(nthPrime) {
    // Good luck!
    let primeArray = [];
    var nthPrime = nthPrime || 10001;
    let iter = 2;
    while(primeArray.length < nthPrime){
        if(iter === 2){
            primeArray.push(iter);
        }
        else if(iter % 2 === 1){
            let isPrime = true;
            for(let p = 0; p < primeArray.length; p += 1){
                if(iter % primeArray[p] === 0){
                    isPrime = false;
                }
            }
            if(isPrime){
                primeArray.push(iter);
            }
        }
        if(iter > 2){
            iter += 2;
        } else {
            iter += 1;
        }
    }
    console.log(primeArray[primeArray.length - 1]);
    return primeArray[primeArray.length - 1];
}

euler7();