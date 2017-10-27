
var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    // change code below this line
    this.add = function (element) {
        // if head empty
        if (this.head == null) {
            let node = new Node(element, null);
            this.head = node;
            this.tail = node;
        }
        else {
            console.log(element);
            let node = new Node(element, this.tail);
            this.tail.next = node;
            this.tail = node;
        }
    };
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
            currentNode.prev = currentNode.next;
            currentNode.next = tempSwap;
            currentNode = currentNode.prev;
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