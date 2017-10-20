// You will need to:

// 1. add an enqueue method for adding items with a priority
// 2. a dequeue method for removing items
// 3. a size method to return the number of items in the queue
// 4. a front method to return the element at the front of the queue
// 5. an isEmpty method that will return true if the queue is empty or false if it is not.

// The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. The dequeue should return only the current item, not its priority.

function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = ([item, priority]) => {
        if(this.collection.length > 0){
            // loop to find spot
            let insertIndex;
            for(let i = 0; i < this.collection.length; i += 1){
                if(this.collection[i][1] > priority){
                        insertIndex = i;
                        // break;
                }
            }
            console.log(insertIndex);
            // if it isn't the last one
            if(insertIndex >= 0){
                //push at that place (insertAt, delete(NONE), what to insert)
                this.collection.splice(insertIndex, 0, [item, priority]);
            }
            // or if it is
            else if(insertIndex == undefined){
                this.collection.push([item, priority]);
            }
        }
        // or this is the first, so push it
        else {
            this.collection.push([item, priority]);
        }
    };
    // The dequeue should return only the current item, not its priority
    this.dequeue = () => {
        let first = this.collection.splice(0, 1);
        console.log(first[0][0]);
        return first[0][0];
    };
    this.size = () => {
        if(this.collection.length > 0){
            return this.collection.length;
        }
        else {
            return "The Priority Queue has no items in it.";
        }
    };
    this.front = () => {
        if(this.collection.length > 0){
            return this.collection[0];
        }
        else{
            return "The Priority Queue has no items in it.";
        }
    };
    this.isEmpty = () => {
        if(this.collection.length > 0){
            return false;
        }
        else{
            return true;
        }
    };
    // Only change code above this line
}

var test = new PriorityQueue(); 
test.enqueue(['taco',1]); 
test.enqueue(['kitten',0]); 
test.enqueue(['dog',0]); 
test.enqueue(['apple',0]); 
test.enqueue(['whale',1]); 
test.printCollection();

// let newPriorityQueue = new PriorityQueue();
// newPriorityQueue.enqueue(["human", 1])
// newPriorityQueue.printCollection();
// console.log(`size: ${newPriorityQueue.size()}`);
// newPriorityQueue.enqueue(["test", 3]);
// newPriorityQueue.printCollection();
// newPriorityQueue.enqueue(["test2", 2]);
// newPriorityQueue.printCollection();
// newPriorityQueue.enqueue(["test3", 2]);
// console.log(`size: ${newPriorityQueue.size()}`);
// console.log(`empty?: ${newPriorityQueue.isEmpty()}`);
// newPriorityQueue.printCollection();
// newPriorityQueue.enqueue(["test4", 3]);
// newPriorityQueue.printCollection();
// newPriorityQueue.dequeue();
// console.log(`size: ${newPriorityQueue.size()}`);
// console.log(`front: ${newPriorityQueue.front()}`);
// newPriorityQueue.printCollection();
// newPriorityQueue.dequeue();
// newPriorityQueue.dequeue();
// newPriorityQueue.dequeue();
// console.log(`empty?: ${newPriorityQueue.isEmpty()}`);