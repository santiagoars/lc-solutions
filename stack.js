

class MinStack{
    constructor(){
        this.stack = [];
        this.memory = [];
    }

    push( value ){
        if( value <= this.getMin() ){
            this.memory.unshift( value );
        }
        this.stack.unshift( value );
    }

    pop(){
        let deleted = this.stack.shift();
        if( deleted === this.getMin() ){
            this.memory.shift();
        }
        return deleted;
    }

    top(){
        return this.stack[ 0 ];
    }

    getMin(){
        if( this.memory.length === 0 ){
            return Infinity;
        }else{
            return this.memory[ 0 ];
        }
    }
}

let minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
minStack.getMin();
minStack.pop();
minStack.getMin();
minStack.pop();
minStack.getMin();
minStack.pop();
console.log( minStack.getMin() );