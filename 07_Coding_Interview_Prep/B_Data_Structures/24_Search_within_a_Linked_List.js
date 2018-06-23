
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
    this.isEmpty = function(){
        if(length === 0){
            return true;
        }
        else {
            return false;
        }
    };
    this.indexOf = function(element){
        var currentNode = head;
        let indexOf = 0;
        while(currentNode){
            if(currentNode.element === element){
                return indexOf;
            }
            else{
                indexOf += 1;
                currentNode = currentNode.next;
            }
            
        }
        return -1;
    };
    this.elementAt = function(index){
        if(index > -1 && index > length - 1){
            return -1;
        }
        else{
            var currentNode = head;
            var indexIs = 0;
            while(indexIs < index){
                indexIs += 1;
                currentNode = currentNode.next;
            }
            return currentNode.element;
        }
    };
    // Only change code above this line
}

let newList = new LinkedList();
console.log(newList.isEmpty());
newList.add("Kitten");
newList.add("Cat");
console.log(newList.indexOf("Cat"));
newList.add("Dog");
newList.add("Beaver")
console.log(newList.head());
newList.remove("Cat");
newList.remove("Kitten");
console.log(newList.head());
console.log(newList.size());
console.log(newList.isEmpty());
console.log(newList.elementAt(2));

