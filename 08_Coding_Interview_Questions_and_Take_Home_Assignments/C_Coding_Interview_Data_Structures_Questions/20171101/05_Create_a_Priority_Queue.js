function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    // enqueue method for adding items with a priority
    // The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. 
    this.enqueue = function([element, priority]){
        if(this.collection.length > 0){
            // find the right spot
            let enqueueIndex;
            for(let i = 0; i < this.collection.length; i += 1){
                if(priority < this.collection[i][1]){
                    // 1 2 3 - 2
                    enqueueIndex = i;
                    console.log(`enqueueIndex: ${enqueueIndex}`);
                    break;
                }
            }
            if(enqueueIndex >= 0){
                this.collection.length = this.collection.length + 1;
                for(let i = this.collection.length - 1; i > enqueueIndex; i -= 1){
                    this.collection[i] = this.collection[i - 1];
                    console.log(`Loop: ${i}`);
                }
                this.collection[enqueueIndex] = [element, priority];
            }
            // if its lower than anything - its last
            if(enqueueIndex == undefined){
                this.collection[this.collection.length] = [element, priority];
            }
        }
        else{
            this.collection[0] = [element, priority];
        }
    }
    // dequeue method for removing items
    // The dequeue should return only the current item, not its priority.
    this.dequeue = function(){
        if(this.collection.length > 0){
            // find the 
            let tempHold = this.collection[0];
            for(let i = 0; i < this.collection.length; i += 1){
                this.collection[i] = this.collection[i + 1];
            }
            this.collection.length = this.collection.length - 1;
            return tempHold[0];
        }
        else{
            return null;
        }
    }
    // size method to return the number of items in the queue
    this.size = function(){
        return this.collection.length;
    }
    // front method to return the element at the front of the queue
    this.front = function(){
        if(this.collection.length > 0){
            return this.collection[0];
        }
        else{
            return null;
        }
    }    
    // isEmpty method that will return true if the queue is empty or false if it is not.
    this.isEmpty = function(){
        return this.collection.length === 0;
    }
    // Only change code above this line
}

let newPriorityQueue = new PriorityQueue();
newPriorityQueue.enqueue(["FirstAlpha", 1]);
newPriorityQueue.enqueue(["ThirdAlpha", 3]);
newPriorityQueue.enqueue(["SecondAlpha", 2]);
newPriorityQueue.enqueue(["FirstBeta", 1]);
newPriorityQueue.printCollection()
console.log(newPriorityQueue.dequeue());
console.log(newPriorityQueue.size());
console.log(newPriorityQueue.front());
console.log(newPriorityQueue.isEmpty());
