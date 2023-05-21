
class Node{
    constructor( value, left, right ){
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

class BinaryTree{
    constructor( root ){
        this.root = root;
    }

    printTree(){
        let output = "";
        
    }
}

let root = new Node( 5 );
let a = new Node( 6 );
let b = new Node( 7 );
root.left = a;
root.right = b;
console.log( root );