var ListNode = function( value, next, prev ){
    this.value = value || null;
    this.next = next || null;
    this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if( this.map.has( key ) ){
        let current = this.map.get( key );
        if( current !== this.tail ){
            if( current.prev !== null ){
                current.prev.next = current.next;
            }else if(current.next !== null){
                this.head = current.next;
            }
    
            if( current.next !== null ){
                current.next.prev = current.prev;
            }
            current.next = null;
            this.tail.next = current;
            current.prev = this.tail;
            this.tail = current;
        }
        return current.value[ 1 ];
    }else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if( this.map.has( key ) ){
        this.get( key );
        this.map.get( key ).value[ 1 ] = value;
    }else{
        let newNode = new ListNode( [ key, value ] );
        if( this.capacity > 0){
            if( this.head === null ){
                this.head = newNode;
                this.tail = newNode;
            }else{
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.capacity--;
        }else{
            this.map.delete( this.head.value[ 0 ] );
            if( this.head.next !== null ){
                this.head = this.head.next;
                this.head.prev.next = null;
                this.head.prev = null;
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }else{
                this.head = newNode;
                this.tail = newNode;
            }
        }
        this.map.set( key, newNode );
    }
    

};

let lRUCache = new LRUCache(1);
lRUCache.put( 2,1 );
console.log( lRUCache.get( 2 ) );
lRUCache.put( 3,2 );
console.log( lRUCache.get( 2 ) );
console.log( lRUCache.get( 3 ) );
