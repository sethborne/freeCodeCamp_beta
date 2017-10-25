var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    // change code below this line
    this.add = function(element){
        // if head empty
        if(this.head == null){
            let node = new Node(element, null);
            this.head = node;
            this.tail = node;
        }
        else{
            console.log(element);
            let node = new Node(element, this.tail);
            this.tail.next = node;
            this.tail = node;
        }
    };
    this.remove = function(element){
        if(this.head === null){
            return null;
        }
        let current = this.head;
        let removed = [];
        
        while(current !== null){
            // when found
            if(current.data === element){
                // push to removed
                removed.push(current.data);
                // now time to repoint
                // case 1a - next - if this is the head
                if(current.prev === null){
                    this.head = current.next;
                } else {
                    // case 1b - next (other) - connect prev next to current next (elim current)
                    current.prev.next = current.next;
                }
                // case 2a - prev - if this is the tail
                if(current.next === null){
                    // set tail to prev
                    this.tail = current.prev;
                } else {
                    // case 2b - prev (other) - connect next prev to current prev
                    current.next.prev = current.prev;
                }
            }
            // else traverse
            current = current.next;
        }
        return removed;
    };
    // change code above this line
};

let newDLList = new DoublyLinkedList();
newDLList.add("Dog");
console.log(newDLList.head);
newDLList.add("Cat");
newDLList.add("Badger");
newDLList.add("AntEater");
console.log(newDLList);