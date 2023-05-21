

function validParentheses( s ){
    const stack = [];
    map = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };
    for( let i = 0; i < s.length; i++ ){
        if( s[ i ] in map ){
            stack.unshift( s[ i ] );
        }else{
            if( map[ stack[ 0 ] ] === s[ i ] ){
                stack.shift();
            }else{
                return false;
            }
        }
    }
    return stack.length < 1;
}

console.log( validParentheses( '((({{{]}})))') );