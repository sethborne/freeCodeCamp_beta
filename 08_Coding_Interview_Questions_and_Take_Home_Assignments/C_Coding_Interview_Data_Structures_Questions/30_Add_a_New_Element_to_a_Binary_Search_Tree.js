var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.add = function(element){
        const currentNode = this.root;
        // if there are no nodes, make this the root
        if(currentNode === null){
            this.root = new Node(element);
            return;
        }
        else{
            // define a function that takes the root node, then will traverse based on left or right, until null value is found
            const findSpot = function(currentNode){
                // if new element is less than or equal to currentNode, then look to left
                if(element <= currentNode.value){
                    // if null, then set the left to the element
                    if(currentNode.left === null){
                        currentNode.left = new Node(element);
                        return;
                    }
                    // if not null, need to run the function again
                    else if(currentNode.left !== null){
                        return findSpot(currentNode.left);
                    }
                }
                // if new element is greater than the currentNode then look right
                else if(element > currentNode.value){
                    // if null, then set the right to the element
                    if(currentNode.right === null){
                        currentNode.right = new Node(element);
                        return;
                    }
                    // if not null need to run the function again
                    else if(currentNode.right !== null){
                        return findSpot(currentNode.right);
                    }
                }
                else{
                    // I really don't know what this means.
                    return null;
                }
            };
            console.log(currentNode);
            // recursive function call;s
            return findSpot(currentNode);
        }
    };
    
    // change code above this line
}

let newBST = new BinarySearchTree();
newBST.add("50");
newBST.add("25");
newBST.add("40");
newBST.add("35")
newBST.add("75");
displayTree(newBST);