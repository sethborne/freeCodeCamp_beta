function euler6(numValMin, numValMax){
    var numValMin = numValMin || 1;
    var numValMax = numValMax || 100;
    
    let sumSquared = 0;
    let sumThenSquared = 0;
    
    for(let i = numValMin; i <= numValMax; i += 1){
        sumSquared += Math.pow(i, 2);
        sumThenSquared += i;
    }
    sumThenSquared *= sumThenSquared;
    console.log(sumThenSquared - sumSquared);
    return sumThenSquared - sumSquared;
}

euler6();

