function repeatStringNumTimes(str, num) {
    // repeat after me
    let newString = "";
    for(let i = 0; i < num; i += 1){
        newString += str;
    }
    return newString;
}

repeatStringNumTimes("abc", 3);