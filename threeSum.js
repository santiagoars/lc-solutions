
function threeSum( nums ){
    let output = [];
    const sorted = nums.sort( (a, b ) => {
        return a - b;
    } );
    let prev = null;
    for( let i = 0; i < nums.length; i++ ){
        if( prev !== nums[ i ] ){
            const target = nums[ i ] * -1;
            const match = twoSum( sorted, target );
            if( match !== -1 ){
                output.push( match.concat( nums[ i ] ) );
            }
            prev = nums[ i ];
        }
    }
    return output;
}

function twoSum( nums, target ){
    let i = 0;
    let j = nums.length - 1;
    while( nums[ i ] + nums[ j ] !== target &&  i < j ){
        const sum = nums[ i ] + nums[ j ];
        if( sum > target ){
            j--;
        }else if( sum < target ){
            i++
        }
    }
    if( i === j || nums[ i ] === nums[ j ] ){
        return -1;
    }
    return nums[ i ] + nums[ j ] === target ? [ nums[ i ], nums[ j ] ] : -1
}

console.log( threeSum( [0,0,0] ) );