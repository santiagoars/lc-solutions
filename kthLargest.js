
class Node{
    constructor( val ){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Heap{
    constructor( root ){
        this.root = root;
        this.last = null;
    }

    add( value ){
        const node = new Node( value );
        if( !this.root ){
            this.root = node;
            this.last = this.root;
        }else{

        }
        let parent = this.findParent( this.root );
        !parent.left ? parent.left = node : parent.right = node;
        if( parent.right && parent.left.val > parent.right.val ){
            parent = this.swap( parent );
        }
    }

    findParent( root ){
        let test = new MinPriorityQueue()
        if( !root.left ){
            return root;
        }else if( !root.right ){
            return root;
        }
        else{
            const left = this.findParent( root.left );
            const right = this.findParent( root.right );
            return left ? left : right;
        }
    }

    swap( parent ){
        const tmp = parent.left;
        parent.left = parent.right;
        parent.right = tmp;
        return parent;
    }

    bubbleUp( x, y ){

    }
}

let test = new Heap( new Node( 20 ) );
test.add( 10 );
test.add( 5 );
test.add( 3 );
test.add( 2 );
console.log( test.root.left );