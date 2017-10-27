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
        // 
        const currentNode = this.root;
        // if no nodes, make this the root
        if(currentNode === null){
            this.root = new Node(element);
            return;
        }
        else{
            // define a function that takes the root node, then will traverse based on left or right, until value is found
            const findSpot = function(currentNode){
                // element less than or equal to the currentNode value
                if(element <= currentNode.value){
                    // if left is null
                    if(currentNode.left === null){
                        currentNode.left = new Node(element);
                        return;
                    } else if(currentNode.left !== null){
                        return findSpot(currentNode.left);
                    }
                }
                // element greater than currentNode value
                else if(element > currentNode.value){
                    // if right is null
                    if(currentNode.right === null){
                        currentNode.right = new Node(element);
                        return;
                    } else if(currentNode.right !== null){
                        return findSpot(currentNode.right);
                    }
                }
                else{
                    return null;
                }
            };
            return findSpot(currentNode);
        }
    };
    this.isPresent = function(value){
        let currentNode = this.root;
        if(currentNode === null){
            return false;
        }
        else{
            while(currentNode){
                if(value === currentNode.value){
                    return true;
                }
                if(value < currentNode.value){
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }
            return false;
        }
    };
    // change code above this line
}

let newBST = new BinarySearchTree();
newBST.add(50);
newBST.add(45);
newBST.add(75);
newBST.add(65);
displayTree(newBST);
console.log(newBST.isPresent(75));
console.log(newBST.isPresent(45));
console.log(newBST.isPresent(65));