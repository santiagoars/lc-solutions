

function threeSum( nums ){
    let output = [];
    for( let i = 0; i < nums.length; i++ ){
        let element = nums[ i ];
        let target = element * -1;
        let pairs = twoSum( nums, target, element );
        if ( pairs !== -1 ){
            output.push( [ element, pairs[ 0 ], pairs[ 1 ] ] );
        }
    }
    return output;
}

function twoSum( nums, target, current ){
    let visited = {};
    for( let i = 0; i < nums.length; i++ ){
        let element = nums[ i ];
        if( current !== element ){
            let match = target - element;
            if( match in visited ){
                return [ element, match ];
            }else{
                visited[ element ] = 1;
            }
        }else{
            visited[ element ] = 1;
        }
    }
    return -1;
}

console.log( threeSum( [-1,0,1,2,-1,-4] ) );