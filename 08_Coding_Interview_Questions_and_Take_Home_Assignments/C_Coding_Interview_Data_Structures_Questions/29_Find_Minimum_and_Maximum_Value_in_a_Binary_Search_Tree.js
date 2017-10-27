var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.add = function(nodeValue){
        // 
        const currentNode = this.root;
        if(this.root === null){
            this.root = new Node(nodeValue);
            return;
        }
        else{
            const searchForSpot = function(currentNode){
                // element less than or equal to the currentNode Value
                if(nodeValue <= currentNode.value){
                    if(currentNode.left === null){
                        currentNode.left = new Node(nodeValue);
                    }
                    else{
                        return searchForSpot(currentNode.left);
                    }
                }
                else if(nodeValue > currentNode.value){
                    if(currentNode.right === null){
                        currentNode.right = new Node(nodeValue);
                    }
                    else{
                        return searchForSpot(currentNode.right);
                    }
                }
                else{
                    return null;
                }
            }
            return searchForSpot(currentNode);
        }
    };
    this.findMin = function(nodeVal){
        // if the tree empty return null
        let currentNode = this.root;
        if(currentNode == null){
            return null;
        }
        else{
            while(currentNode.left){
                currentNode = currentNode.left;
            }
            return currentNode.value;
            // return min value
        }
    };
    this.findMax = function(){
        // if the tree empty return null
        let currentNode = this.root;
        if(currentNode == null){
            return null;
        }
        else{
            while(currentNode.right){
                currentNode = currentNode.right;
            }
            return currentNode.value;
            // return max value
        }
    };
    // change code above this line
}

let newBST = new BinarySearchTree();
newBST.add(50);
newBST.add(25);
newBST.add(75);
newBST.add(35);
newBST.add(65);
newBST.add(95);
newBST.add(15);
// console.log(newBST);
displayTree(newBST);
console.log(newBST.findMin());
console.log(newBST.findMax());
