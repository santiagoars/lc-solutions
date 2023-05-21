


function memoize( cost ){
    let memo = [];
    for( let i = 0; i < cost.length; i++ ){
        memo[ i ] = minCost( i, memo, cost );
    }
    return memo[ 0 ] < memo[ 1 ] ? memo[ 0 ]: memo[ 1 ];
}

function minCost( index, memo, cost ){
    if( index >= cost.length ){
        return 0;
    }else{
        if( memo[ index ] ){
            return memo[ index ];
        }else{
            let left = cost[ index ] + minCost( index + 1, memo, cost );
            let right = cost[ index ] + minCost( index + 2, memo, cost );
            memo[ index ] = left < right ? left : right;
            return memo[ index ];
        }
    }
}

console.log( memoize( [1,100,1,1,1,100,1,1,100,1] ) );