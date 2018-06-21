// Write a push method that pushes an element to the top of the stack, a pop method that removes the element on the top of the stack, a peek method that looks at the first element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack.

// Normally stacks don't have this, but we've added a print helper method that console logs the collection.

function Stack() { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function(item){
        collection.push(item);
    };
    this.pop = function(){
        if(collection.length > 0){
            let last = collection[collection.length - 1];
            collection.pop();
            console.log(last);
            return last;
        }
    };
    this.peek = function(){
        let last = collection[collection.length - 1];
        console.log(last);
        return last;
    };
    this.isEmpty = function(){
        let empty;
        if(collection.length > 1){
            empty = false;
        }
        else{
            empty = true;
        }
        console.log(empty);
        return empty;
    };
    this.clear = function(){
        collection = [];
    };
    // Only change code above this line
}

let newStack = new Stack();
newStack.push(5);
newStack.push(2)
newStack.print();
newStack.pop();
newStack.print();
newStack.isEmpty();
newStack.pop();
newStack.isEmpty();
newStack.push(1);
newStack.push(4);
newStack.isEmpty();
newStack.peek();
newStack.clear();
newStack.print();
newStack.isEmpty();