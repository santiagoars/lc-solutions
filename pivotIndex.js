

function pivotIndex( nums ){
    for( let i = 0; i < nums.length; i++ ){
        const left = sum( nums.slice( 0, i ) );
        const right = sum( nums.slice( i+1, nums.length ) );
        if( left === right ){
            return i;
        }
    }
    return -1;
}

function sum( arr ){
    if( arr.length === 0 ) return 0;
    return arr.reduce( ( a,b ) => a+ b );
}

function pivotIndex2( nums ){
    const map = new Map();
    map.set( 0, 0 );
    let sum = 0;
    for( let i = 1; i < nums.length; i++ ){
        sum += nums[ i - 1 ];
        map.set( i, sum );
    }
    let index = -1;
    if( map.get( nums.length - 1 ) === 0 ){
        index = nums.length - 1;
    }
    sum = 0;
    for( let i = nums.length -1; i--; ){
        sum += nums[ i + 1 ];
        if( map.get( i ) === sum ){
            index = i;
        }
    }
    return index;
}


console.log( pivotIndex2( [-1,-1,0,1,1,0] ) );