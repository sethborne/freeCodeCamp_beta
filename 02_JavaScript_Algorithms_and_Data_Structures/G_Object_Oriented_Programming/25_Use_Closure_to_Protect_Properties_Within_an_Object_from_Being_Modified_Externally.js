function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}

let daffy = new Bird();
console.log(daffy.getWeight());