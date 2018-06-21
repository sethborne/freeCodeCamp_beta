// Write:

// 1. an enqueue method that pushes an element to the tail of the queue, 
// 2. a dequeue method that removes and returns the front element, 
// 3. a front method that lets us see the front element, 
// 4. a size method that shows the length, 
// 5. an isEmpty method to check if the queue is empty.

function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    };
    this.dequeue = function(){
        if(collection.length > 0){
            let first = collection[0];
            collection.splice(0, 1);
            console.log(first);
            return first;
        }
        else{
            return "No Values in the Queue to Dequeue";
        }
    };
    this.front = function(){
        if(collection.length > 0){
            let firstItem = collection[0];
            console.log(firstItem);
            return firstItem;
        }
        else{
            return "No Values in the Queue to Dequeue";
        }
    };
    this.size = function(){
        console.log(collection.length);
        return collection.length;
    };
    this.isEmpty = function(){
        let empty;
        if(collection.length > 0){
            empty = false;
        }
        else{
            empty = true;
        }
        console.log(empty);
        return empty;
    };
    // Only change code above this line
}

let newQueue = new Queue();

newQueue.enqueue(5);
// newQueue.enqueue(2);
newQueue.print();
newQueue.front();
newQueue.isEmpty();
newQueue.size();
newQueue.dequeue();
newQueue.print();
newQueue.front();
newQueue.isEmpty();
newQueue.size();