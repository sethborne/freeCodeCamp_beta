
var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    // change code below this line
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
    this.reverse = function(){
        if(this.head === null){
            return null;
        }
        let currentNode = this.head;
        let tempSwap = null;
        while(currentNode != null){
            if(currentNode.prev === null){
                this.tail = currentNode;
            }
            else if(currentNode.next === null){
                this.head = currentNode;
            }
            tempSwap = currentNode.prev;
            console.log('tempSwap', tempSwap);
            currentNode.prev = currentNode.next;
            console.log('currentNode.prev', currentNode.prev);
            currentNode.next = tempSwap;
            console.log('currentNode.next', currentNode.next);
            currentNode = currentNode.prev;
            console.log('currentNode', currentNode);
        }
        // return tempSwap.prev;
    };
    // change code above this line
};

let newDLList = new DoublyLinkedList();
newDLList.add("Dog");
console.log(newDLList.head);
newDLList.add("Cat");
newDLList.add("Snake")
newDLList.add("Badger");
console.log(newDLList);
newDLList.reverse();
console.log();
console.log(newDLList);