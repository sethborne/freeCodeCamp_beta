function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) { // {1} 
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };

    // Only change code below this line
    this.removeAt = function(index){
        let currentNode = head;
        let previousNode = null;
        let currentIndex = 0;
        let saveNode;
        // fast fail
        if(index > length - 1 || index < 0){
            // method returns null if the given index is negative or greater than or equal to the lenght of the linked list.
            return null;
        }
        else{
            if(index == 0){
                console.log("HERE");
                saveNode = currentNode;
                head = currentNode.next;
                saveNode.next = null;
                console.log(head);
            }
            else{
                console.log("do hit");
                while(currentIndex < index){
                    currentIndex += 1;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                // this is your index
                saveNode = currentNode;
                saveNode.next = null;
                previousNode.next = currentNode.next;
            }
            length -= 1;
        }
        return saveNode.element;
        
    }
    // Only change code above this line
}

let newList = new LinkedList();;
newList.add("Kitten");
newList.add("Cat");
newList.add("Dog");
newList.add("Beaver")
console.log(newList.head());
// newList.remove("Cat");
// newList.remove("Kitten");
console.log(newList.head());
console.log(newList.size());
console.log(newList.removeAt(0));
console.log(newList.head());
console.log(newList.size());