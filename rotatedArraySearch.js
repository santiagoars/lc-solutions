

function rotatedSearch( nums, target ){
    let [ left, right ] = [ 0, nums.length - 1 ];
    while( left <= right ){
        const mid = ( left + right ) >> 1;
        if( target === nums[ mid ] ){
            return mid;
        }

        // Mid is part of left portion
        if( nums[ mid ] >= nums[ left ] ){
            if( target < nums[ left ] || target > nums[ mid ] ){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        // Mid is part of right portion
        }else{
            if( target > nums[ right ] || target < nums[ mid ] ){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }
    return -1;
}

console.log( rotatedSearch( [5,1,3], 5))