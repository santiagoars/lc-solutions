


function memoize( n ){
    if( n === 1 ){
        return 1;
    }
    let memo = [];
    for( i = 0; i < n; i++ ){
        if( !memo[ i ] ){
            memo[ i ] = optimizedFib( i, memo );
        }
    }
    return memo[ n - 1 ] + memo[ n - 2 ];
}

function optimizedFib( n, memo ){
    if( n == 0 || n == 1 ){
        return 1;
    }else{
        if( memo[ n ] ){
            return memo[ n ];
        }else{
            return optimizedFib( n - 1, memo ) + optimizedFib( n - 2, memo );
        }
    }
}

function fib( n ){
    if( n == 0 || n == 1 ){
        return 1;
    }else{
        return fib( n - 1 ) + fib( n - 2 );
    }
}

console.log( memoize( 7 ) );