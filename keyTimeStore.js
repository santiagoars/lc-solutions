var TimeMap = function() {
    this.store = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if( !this.store.has( key ) ){
        this.store.set( key, [ [ value, timestamp ] ] );
    }else{
        this.store.get( key ).push( [ value, timestamp ] );
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if( !this.store.has( key ) ){
        return "";
    }else{
        const result = binarySearch( this.store.get( key ), timestamp );
        const closest = this.store.get( key )[ result ][ 1 ];
        if( timestamp < closest ){
            return "";
        }else{
            return this.store.get( key )[ result ][ 0 ];
        }
    }
};

function binarySearch( array, target ){
    let [ left, right ] = [ 0, array.length -1 ];
    let mid = ( left + right ) >> 1;
    while( left <= right ){
        mid = ( left + right ) >> 1;
        if( array[ mid ][ 1 ] === target ){
            return mid;
        }else if( array[ mid ][ 1 ] < target ){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return mid;
}

let test = new TimeMap();
test.set( 'foo', 'bar', 1 );
console.log( test.get( 'foo', 1 ) );
console.log( test.get( 'foo', 3 ) );
test.set( 'foo', 'blue', 4);
console.log( test.get( 'foo', 4 ) )
console.log( test.get( 'foo', 60))

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */