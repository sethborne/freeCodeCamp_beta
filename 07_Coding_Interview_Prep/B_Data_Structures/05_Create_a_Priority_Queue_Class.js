// In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.

// For instance, let’s imagine we have a priority queue with three items:

// [[’kitten’, 2], [‘dog’, 2], [‘rabbit’, 2]]

// Here the second value (an integer) represents item priority. If we enqueue [‘human’, 1] with a priority of 1 (assuming lower priorities are given precedence) it would then be the first item to be dequeued. The collection would like this:

// [[‘human’, 1], [’kitten’, 2], [‘dog’, 2], [‘rabbit’, 2]].

// We’ve started writing a PriorityQueue in the code editor. You will need to add an enqueue method for adding items with a priority, a dequeue method for removing items, a size method to return the number of items in the queue, a front method to return the element at the front of the queue, and finally an isEmpty method that will return true if the queue is empty or false if it is not.

// The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. The dequeue should return only the current item, not its priority.

// You will need to add:

// The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. The dequeue should return only the current item, not its priority.

function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
        console.log(this.collection);
    };
    // Only change code below this line
    //  an enqueue method for adding items with a priority,
    this.enqueue = function(item){
        if(!this.collection.length){
            this.collection.push(item)
        }
        else {
            let insertIndex = this.collection.length;
            for(let i = 0; i < this.collection.length; i += 1){
                if(item[1] < this.collection[i][1]){
                    insertIndex = i;
                    break;
                }
                console.log(i);
            }
            console.log(insertIndex);
            if(insertIndex === this.collection.length){
                this.collection.push(item)
            }
            else {
                this.collection.splice(insertIndex, 0, item)
            }
        }
        return this
    }
    //  a dequeue method for removing items, 
    this.dequeue = function(itemToDequeue){
        if(!this.collection.length){
            return null;
        }
        else{
            let dequeuedItem = this.collection.shift();
            return dequeuedItem[0]
        }
    }
    //  a size method to return the number of items in the queue, 
    this.size = function(){
        return this.collection.length;
    }
    //  a front method to return the element at the front of the queue, 
    this.front = function(){
        if(this.collection.length){
            return this.collection[0]
        }
        else{
            return null
        }
    }
    //  an isEmpty method that will return true if the queue is empty or false if it is not.
    this.isEmpty = function(){
        return this.collection.length ? false : true;
    }
    // Only change code above this line
}

let pQueue = new PriorityQueue();
console.log(pQueue.enqueue(["human", 1]));
console.log(pQueue.enqueue(["kitten", 2]));
console.log(pQueue.enqueue(["dog", 3]));
console.log(pQueue.enqueue(["rabbit", 2]));
console.log(pQueue.enqueue(["rabid-rabbit", 2]));
console.log('dequeue', pQueue.dequeue());
console.log(pQueue.size());
console.log(pQueue.front());
console.log(pQueue.isEmpty());