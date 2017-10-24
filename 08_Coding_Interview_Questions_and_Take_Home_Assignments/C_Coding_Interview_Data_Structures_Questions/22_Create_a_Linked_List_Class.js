function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.head = function () {
        return head;
    };

    this.size = function () {
        return length;
    };

    this.add = function (element) {
        // Only change code below this line
        // define node
        var node = new Node(element)
        console.log(node);
        // if(this.head === null){
        // is there a head?
        if(head === null){
            head = node;
        }
        else {
            let currentNode = head;
            // while there is a node.next (node.next !== null)
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            // at end - so lets now add.  current.next = our node.
            currentNode.next = node;
        }
        length += 1;
        // Only change code above this line
    };
}

let newList = new LinkedList();
newList.add("Kitten");
console.log(newList.head());
console.log(newList.size());