function euler5(inputNumVal){
    let primeArray = [];
    for(let i = 2; i < inputNumVal; i += 1){
        if(i === 2){
            primeArray.push(i);
        }
        else if(i % 2 === 1){
            let isPrime = true;
            for(let j = 0; j < primeArray.length; j += 1){
                if(i % primeArray[j] === 0){
                    isPrime = false;
                }
            }
            if(isPrime){
                primeArray.push(i);
            }
        }
    }
    console.log(primeArray);
    let countArray = new Array(primeArray.length).fill(0);
    console.log(countArray);
    // count primes
    for(let c = 1; c <= inputNumVal; c += 1){
        let cTotal = c;
        let j = 0;    
        let count = 0;
        console.log(`c: ${c} | cTotal: ${cTotal} | count: ${count}`);
        while(cTotal > 1){
            if(cTotal % primeArray[j] === 0){
                    cTotal /= primeArray[j];
                    count += 1;
                    if(count > countArray[j]){
                        countArray[j] = count;
                    }
                }
            else{
                count = 0;
                j += 1;
            }
        }
        
    }
    console.log(primeArray);
    console.log(countArray);
    // final Product
    let totalProduct = 1;
    for(let p = 0; p < countArray.length; p += 1){
        if(countArray[p] > 0){
            for(let m = countArray[p]; m > 0; m -= 1){
                totalProduct = totalProduct *= primeArray[p];
            }
        }
    }
    console.log(totalProduct);
}

euler5(20);