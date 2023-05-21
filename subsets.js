
// Only works for the example input
function subsets( nums ){
    const output = [[]];
    for( const num of nums ){
        output.push( [num] );
    }

    for( let i = 0; i < nums.length; i++ ){
        for( let j = i + 1; j < nums.length; j++ ){
            output.push( [nums[ i ], nums[j]])
        }
    }
    const res = [];
    for( const num of nums ){
        res.push( num );
    }
    output.push( res );
    return output;
}

function subsets2( nums ){
    const output = [];
    const stack = [ [] ];
    let i = 0;
    while( stack.length > 0 ){
        let current = stack.pop();
        output.push( current );
        if( nums[ i ] ){
            stack.push( [] );
            stack.push( current.push( nums[ i ] ) )
            i++;
        }
    }
    return output;
}

console.log( subsets2( [ 1,2,3,4 ]))