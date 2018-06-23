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
        };
    this.remove = function(element){
    // Only change code below this line
        // search for element no need new node
        let currentNode = head;
        let previousNode = null;
        // if head
        if(currentNode.element === element){
            // set new head to next node
            head = currentNode.next;
        }
        // else not head
        else{
            // when curr.elem is not element
            while(currentNode.element !== element){
                // move down the ll chain
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // otherwise this is your node, so delete it.
            previousNode.next = currentNode.next;
        }
        // make the length accurate for this method
        length -= 1;
    // Only change code above this line
    };
}

let newList = new LinkedList();
newList.add("Kitten");
newList.add("Cat");
newList.add("Dog");
newList.add("Beaver")
console.log(newList.head());
newList.remove("Cat");
newList.remove("Kitten");
console.log(newList.head());
console.log(newList.size());