const forecast = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};
// change code below this line
// const maxOfTomorrow = undefined; 
const { tomorrow : { min: minOfTomorrow, max: maxOfTomorrow } } = forecast;

// change this line
// change code above this line
console.log(maxOfTomorrow); // should be 84.6