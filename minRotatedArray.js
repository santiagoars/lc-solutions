

function minArray( nums ){
    [ left, right ] = [ 0, nums.length - 1 ];
    if( nums[ left ] < nums[ right ] ){
        return nums[ left ];
    }else{
        while( left < right ){
            const mid = ( left + right ) >> 1;
            if( nums[ right ] < nums[ mid ] ){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
    }
    return nums[ right ];
}

console.log( minArray( [4,5,6,7,0,1,2] ) );