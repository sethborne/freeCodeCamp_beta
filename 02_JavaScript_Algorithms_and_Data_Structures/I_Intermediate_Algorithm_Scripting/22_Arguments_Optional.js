function addTogether() {
    let args = Array.from(arguments);
    function checkNum(arg1){
        if (typeof arg1 !== 'number' ) {
            return undefined;
        }
        else {
            return arg1
        }
    }
    // just add together
    let a = args[0];
    let b = args[1];
    if(args.length === 1 && checkNum(a)){
        // only one arg, and its valid
        return function(b){
            // param is other arg
            // check valid?
            if(checkNum(b)){
                // then add
                return a + b;
            }
        }
    }
    else if(args.length === 2){
        if(checkNum(a)){
            if(checkNum(b)){
                return a + b;
            }
        }
    }
}


console.log(addTogether(2, 3));
console.log(addTogether(2)(3));