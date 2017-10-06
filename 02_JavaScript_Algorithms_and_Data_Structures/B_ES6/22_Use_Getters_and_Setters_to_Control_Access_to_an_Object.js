/* Alter code below this line */
class Thermostat {
    constructor(temperature){
        this._temperature = (temperature - 32) * 5/9;
    }
    get temperature(){
        return this._temperature;
    }
    set temperature(updateTemperature){
        this._temperature = updateTemperature;
    }
};
/* Alter code above this line */
const thermos = new Thermostat(76); 
// setting in Farenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);