function sum(...args) {
    const array = [];
    for(let i = 0; i < args.length; i += 1){
        array.push(args[i])
    }
    return array.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6