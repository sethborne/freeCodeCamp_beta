function nonMutatingSplice(cities) {
    // Add your code below this line
    // return cities.splice(3);
    return cities.slice(0, 3);
    // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
console.log(nonMutatingSplice(inputCities));
console.log(inputCities);