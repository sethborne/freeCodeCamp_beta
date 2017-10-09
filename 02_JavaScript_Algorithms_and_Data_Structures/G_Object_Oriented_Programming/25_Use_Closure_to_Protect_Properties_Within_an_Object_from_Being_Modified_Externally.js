function Bird() {
    // this.weight = 15;
    let weight = 15;
    this.getWeight = function(){
        return weight;
    }
}

let daffy = new Bird();
console.log(daffy.getWeight());