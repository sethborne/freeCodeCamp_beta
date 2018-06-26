var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    // change code below this line
    // change code above this line
    this.add = function (value) {
        if (this.head === null) {
            // instantiate this node, prev is null
            let addNode = new Node(value, null)
            // then just add this as the head and tail
            this.head = addNode;
            this.tail = addNode;
        } else {
            // instantiate the node, the prev is tail
            let addNode = new Node(value, this.tail);
            // then just redefine the tails next, then tail
            this.tail.next = addNode;
            this.tail = addNode;
        }
    }
    this.remove = function (value) {
        if (!this.head && !this.tail) {
            return null
        } else {
            let currentNode = this.head;
            let removedNodeArr = [];
            // while we have a node to traverse
            while (currentNode) {
                // if the current value === remove value
                if (currentNode.data === value) {
                    // let removedNode = currentNode;
                    removedNodeArr.push(currentNode)
                    // if it is the head
                    if (currentNode.prev === null) {
                        // reassign head
                        this.head = currentNode.next;
                    } else {
                        currentNode.prev.next = currentNode.next
                    }
                    // if it is the tail
                    if (currentNode.next === null) {
                        // reassign tail
                        this.tail = currentNode.prev;
                    } else {
                        currentNode.next.prev = currentNode.prev
                    }
                }
                // else traverse
                currentNode = currentNode.next
            }
            return removedNodeArr;
        }
    }
};