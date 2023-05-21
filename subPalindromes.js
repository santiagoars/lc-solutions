
// Brute Force solution
function isPalindrome( s ){
    let [ i, j ] = [ 0, s.length - 1 ];
    while( i <= j ){
        if( s[ i ] !== s[ j ] ){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function subPalindromes( s ){
    let counter = 0;
    let store = {};
    let sub = '';
    for( let i = 0; i < s.length; i++ ){
        for( let j = i + 1; j < s.length + 1; j++ ){
            sub = s.substring( i, j );
            if( !(sub in store) ){
                if( isPalindrome( sub ) ){
                    counter++;
                }
            }
        }
    }
    return counter;
}

function subPalindromesII( s ){
    let counter = 0;
    for( let i = 0; i < s.length; i++ ){
        // Odd palindromes
        let [ l, r ] = [ i, i ];
        while( (l >= 0 && r < s.length) && s[ l ] === s[ r ] ){
            counter++;
            l--;
            r++;
        }
        // Even palindromes
        [ l, r ] = [ i, i + 1 ];
        while( (l >= 0 && r < s.length) && s[ l ] === s[ r ] ){
            counter++;
            l--;
            r++;
        }
    }
    return counter;
}

console.log( subPalindromes( 'abx' ) );