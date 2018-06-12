function orbitalPeriod(inputArray) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for(let i = 0; i < inputArray.length; i += 1){
        let T;
        console.log(inputArray[i]["avgAlt"]);
        let a = Math.pow(inputArray[i]["avgAlt"] + earthRadius, 3);
        console.log(a);
        let twoPI = 2*Math.PI;
        T = Math.round( twoPI*Math.sqrt(a / GM) );
        console.log(T);
        delete inputArray[i]["avgAlt"];
        inputArray[i]["orbitalPeriod"] = T;
    }
    console.log(inputArray);
    return inputArray;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].