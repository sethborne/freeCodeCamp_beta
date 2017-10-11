function destroyer(inputArray) {
    // Remove all the values
    let revArray = [...inputArray];
    console.log(revArray);
    let argArray = Array.from(arguments);
    argArray = argArray.slice(1);
    revArray = revArray.filter((arrItem) => {
        console.log(arrItem);
        return !argArray.includes(arrItem);
    });
    console.log(argArray);
    console.log(revArray);
    return revArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);