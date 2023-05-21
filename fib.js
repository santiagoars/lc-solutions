
function fib( n ){
    return fibonacci( n, [])
}


function fibonacci( n, memo ){
    if( n === 0 || n === 1 ){
        return n;
    }else if( memo[ n ]){
        return memo[ n ];
    }else{
        const result = fibonacci( n-1, memo ) + fibonacci( n-2, memo );
        memo[ n ] = result;
    }
    return memo[ n ];
}

console.log( fib(6) );