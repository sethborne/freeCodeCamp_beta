function bouncer(inputArray) {
    // Don't show a false ID to this bouncer.
    let notFalsyArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        console.log(i);
        if(inputArray[i]){
            notFalsyArray.push(inputArray[i]);
        }
    }
    console.log(notFalsyArray);
    return notFalsyArray;
}

bouncer([7, "ate", "", false, 9]) 
// should return [7, "ate", 9].
bouncer(["a", "b", "c"])
// should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""])
// should return [].
bouncer([1, null, NaN, 2, undefined])
// should return [1, 2].