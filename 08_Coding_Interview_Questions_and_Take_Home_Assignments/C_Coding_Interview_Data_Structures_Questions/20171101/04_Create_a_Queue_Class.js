function Queue() {
    collection = [];
    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    // enqueue method that pushes an element to the tail of the queue
    this.enqueue = function(element){
        if(collection.length > 0){
            collection[collection.length] = element;
        }
        else{
            collection[0] = element;
        }
    };
    // dequeue method that removes and returns the front element
    this.dequeue = function(){
        if(collection.length > 0){
            let tempHold = collection[0];
            for(let i = 0; i < collection.length; i += 1){
                collection[i] = collection[i + 1];
            }
            collection.length = collection.length - 1;
            return tempHold;
        }
    };
    // front method that lets us see the front element
    this.front = function(){
        if(collection.length > 0){
            return collection[0];
        }
        else{
            return null;
        }
    };
    // size method that shows the length
    this.size = function(){
        return collection.length;
    };
    // isEmpty method to check if the queue is empty.
    this.isEmpty = function(){
        return collection.length === 0;
    };
    // Only change code above this line
}

// FIFO

// 1 2 3 4 5

let newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
// newQueue.enqueue(4);
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(`Front: ${newQueue.front()}`);
newQueue.print();
console.log(newQueue.isEmpty());