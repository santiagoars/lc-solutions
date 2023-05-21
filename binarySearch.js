// target = 12
// left = 4
// right = 5
// mid = 4

function binarySearch( target, nums ){
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor( ( left + right ) / 2 );
    while( left <= mid ){
        if ( nums[ mid ] === target ){
            return mid;
        } else if( target < nums[ mid ] ){
            right = mid - 1;
            mid = Math.floor( (right + left) / 2 );
        }else{
            left = mid + 1;
            mid = Math.floor( (right + left) / 2 );
        }
    }
    return -1;
}

console.log( binarySearch( 12, [-1,0,3,5,9,12] ) );