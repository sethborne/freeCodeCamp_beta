class CircularQueue {
    constructor(size) {
        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        return this.queue;
    }

    // The circular queue should provide enqueue and dequeue methods which allow you to read from and write to the queue. 
    // The class itself should also accept an integer which you can use to specify the size of the queue when you create it. 
    // We've written the starting version of this class for you in the code editor. When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. 
    // Likewise, the read pointer should advance forward as you dequeue items. The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written.
    
    // In addition, the enqueue method should return the item you enqueued if it is successfully and otherwise return null. Similarly, when you dequeue an item it should be returned and if you cannot dequeue you should return null.
    enqueue(item) {
        // Only change code below this line
        for()
        // Only change code above this line
    }

    dequeue() {
        // Only change code below this line

        // Only change code above this line
    }
}

let newCircularQueue = new CircularQueue(5);
console.log(newCircularQueue.print());
newCircularQueue.enqueue(1);