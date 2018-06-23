var Node = function(element){
    this.element = element; 
    this.next = null; 
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

Kitten.next = Puppy;
// only add code below this line

var Cat = new Node("Cat");
var Dog = new Node("Dog");
Puppy.next = Cat;
Cat.next = Dog;
// test your code
console.log(Kitten.next);