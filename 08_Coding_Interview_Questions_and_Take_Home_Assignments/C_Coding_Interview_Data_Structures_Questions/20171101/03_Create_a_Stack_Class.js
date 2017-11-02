function Stack() { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    
    // push method that pushes an element to the top of the stack
    this.push = function(element){
        if(collection.length > 0){
            collection[collection.length] = element;
        }
        else {
            collection[0] = element;
        }
    };
    // pop method that removes the element on the top of the stack
    this.pop = function(){
        if(collection.length > 0){
            let tempHold = collection[collection.length - 1];
            collection.length = collection.length - 1;
            return tempHold;
        }
        else {
            return null;
        }
    };
    // peek method that looks at the first element in the stack
    this.peek = function(){
        if(collection.length > 0){
            return collection[collection.length - 1];
        }
        else{
            return null;
        }
    };
    // isEmpty method that checks if the stack is empty
    this.isEmpty = function(){
        return collection.length === 0;
    };
    // clear method that removes all elements from the stack.
    this.clear = function(){
        collection = [];
        return collection;
    };
    // Only change code above this line
}

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.print()
console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.pop());
newStack.print();
console.log(newStack.peek());
console.log(newStack.isEmpty());
console.log(newStack.clear());
