

function productExceptSelf( nums ){
    const prefix = [];
    const postfix = [];
    const output = [];
    // Calculate prefix
    let pre = 1;
    prefix.push( pre );
    for( let i = 0; i < nums.length - 1; i++ ){
        pre = pre * nums[ i ];
        prefix.push( pre )
    }
    let post = 1;
    postfix.push( post );
    for( let i = nums.length - 1; i > 0; i-- ){
        post = post * nums[ i ];
        postfix.unshift( post );
    }
    for( let i = 0; i < nums.length; i++ ){
        let result = prefix[ i ] * postfix[ i ];
        if( result === -0 ){
            result = Math.abs( result );
        }
        output.push( result );
    }
    return output;
}

console.log( productExceptSelf( [-1,-2,3,-4 ] ) );