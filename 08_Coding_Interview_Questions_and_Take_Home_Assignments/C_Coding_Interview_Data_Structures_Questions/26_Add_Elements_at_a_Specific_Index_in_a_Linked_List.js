function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
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

    // Only change code below this line
    this.addAt = function(index, element){
        let node = new Node(element);
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;
        
        if(index > length - 1 || index < 0){
            console.log("Index Out of Range");
            return false;
        }
        else{
            if(index == 0){
                push = currentNode;
                head = node;
                head.next = push;
            }
            else{
                // find index
                while(currentIndex < index){
                    currentIndex += 1;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                // push = currentNode;
                previousNode.next = node;
                node.next = currentNode;
            }
        }
        length += 1;
    };
    // Only change code above this line
}

let newList = new LinkedList();;
newList.add("Kitten");
newList.add("Cat");
newList.add("Dog");
newList.add("Beaver")
newList.addAt(0, "KittenNewHead")
console.log(newList.addAt(5, "KittenNewHead"));
console.log(newList.head());
console.log(newList.size());