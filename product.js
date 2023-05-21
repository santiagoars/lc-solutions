
function productExceptSelf( nums ){
    const result = [];
    const pre = prefix( nums );
    const post = postfix( nums );
    for( let i = 0; i < nums.length; i++ ){
        if( i === 0 ){
            result.push( post[ i + 1] )
        }else if( i === nums.length - 1 ){
            result.push( pre[ i - 1] );
        }else{
            result.push( pre[ i - 1 ] * post[ i + 1] );
        }
    }
    return result;
}

function prefix( nums ){
    let pre = [];
    let result = 1;
    for( let i = 0; i < nums.length; i++ ){
        pre.push( result * nums[ i ] ); 
        result = result * nums[ i ];
    }
    return pre;
}

function postfix( nums ){
    let post = [];
    let result = 1;
    for( let i = nums.length - 1; i > -1; i-- ){
        post.unshift( result * nums[ i ] );
        result = result * nums[ i ]; 
    }
    return post;
}

console.log( productExceptSelf( [5,2,-1,4] ) );