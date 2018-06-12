function truthCheck(collection, pre) {
    // Is everyone being true?
    let isTrue;
    let arrayOfTruth = [];
    let countFalse = 0;
    console.log(collection[0][pre]);
    for(let i = 0; i < collection.length; i += 1){
        console.log(collection[i]);
        if(collection[i][pre]){
            isTrue = true;
            arrayOfTruth.push(isTrue);
        }
        else{
            isTrue = false;
            arrayOfTruth.push(isTrue);
            countFalse += 1;
        }
    }
    console.log(arrayOfTruth);
    if(countFalse > 0){
        return false;
    }
    else{
        return true;
    }
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
