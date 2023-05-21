

var findDuplicate = function(nums) {
    if ( nums.length < 3 ){
        return nums[ 0 ];
    }
    let [ i, j ] = [ 0, 2 ];
    while( true ){
        i = moveSlow(i, nums);
        j = moveFast(j, nums);
        if( i !== j && nums[ i ] === nums[ j ] ){
            return nums[ i ];
        }
    }
};

const moveFast = ( j, nums ) => {
    if( j === nums.length - 2 ){
        j = 0;
    }else if( j === nums.length - 1 ){
        j = 1
    }else{
        j = j + 2
    }
    return j;
}

const moveSlow = ( i, nums ) => {
    if( i !== nums.length -1 ){
        i++
    }else{
        i = 0;
    }
    return i;
}

console.log( findDuplicate( [1,3,4,2,2] ) );