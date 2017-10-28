var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.add = function(value){
        // current = root
        const currentNode = this.root;
        // if root !== exist, make it
        if(currentNode === null){
            this.root = new Node(value);
            return;
        }
        // else there are nodes, find right place
        else{
            // function
            const searchForEmpty = function(currentNode){
                // if less than
                if(value <= currentNode.value){
                    if(currentNode.left === null){
                        currentNode.left = new Node(value);
                    }
                    else{
                        // call function on left node
                        return searchForEmpty(currentNode.left);
                    }
                }
                // if greater than
                else if(value > currentNode.value){
                    if(currentNode.right === null){
                        currentNode.right = new Node(value);
                    }
                    else{
                        return searchForEmpty(currentNode.right);
                    }
                }
                else{
                    return null;
                }
            }
            return searchForEmpty(currentNode)
        }
    }
    this.findMinHeight = function(currentNode = this.root){
        // so recursive
        // var currentNode = this.root;
        // if no current
        if(currentNode == null){
            return -1;
        }
        var left = this.findMinHeight(currentNode.left);
        var right = this.findMinHeight(currentNode.right);
        if (left < right){
            return left + 1;
        } else {
            return right + 1;
        }
    };
    this.findMaxHeight = function(currentNode = this.root){
        //so recursive
        if(currentNode == null){
            return -1;
        }
        var left = this.findMaxHeight(currentNode.left);
        var right = this.findMaxHeight(currentNode.right);
        if(left > right){
            return left + 1;
        } else {
            return right + 1;
        }
        
    };
    this.isBalanced = function(){
        // return(this.findMinHeight() >= this.findMaxHeight() - 1);
        // return(this.findMinHeight() > this.findMaxHeight() - 1);
        return(this.findMinHeight() > this.findMaxHeight() - 1) ? false : true;
    };
    // change code above this line
}

let newBST = new BinarySearchTree();
newBST.add(50);
newBST.add(45);
newBST.add(75);
newBST.add(65);
newBST.add(125);
// newBST.add(150);
displayTree(newBST);
console.log(newBST.findMinHeight());
console.log(newBST.findMaxHeight());
console.log(newBST.isBalanced());
// console.log(newBST.isPresent(75));
// console.log(newBST.isPresent(45));
// console.log(newBST.isPresent(65));