const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
// change code below this line

// const half = (stats) => {
//     const { max, min } = stats;
//     temp = ((stats.max + stats.min) / 2.0); 
// } 

const half = ({max, min}) => ((stats.max + stats.min) / 2.0);



// use function argument destructurung


// change code above this line
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
// console.log(temp);