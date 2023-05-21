

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

// Brute Force
function maxSubPalindrome( s ){
    let max = '';
    let sub = '';
    let store = {};
    for( let i = 0; i < s.length; i++ ){
        for( let j = i + 1; j < s.length + 1; j++ ){
            sub = s.substring( i, j );
            if( sub in store ){
                continue;
            }else{
                if( isPalindrome( sub ) ){
                    store[ sub ] = 1;
                    if( sub.length > max.length ){
                        max = sub
                    }
                }
            }
        }
    }
    return max;
}


//Correct solution
function maxPal( s ){
    let max = '';
    for( let i = 0; i < s.length; i++ ){
        let [l,r] = [i,i];
        // Odd palindromes
        while( (l >= 0 && r < s.length) && s[l] === s[r] ){
            if( s.substring( l, r + 1 ).length > max.length ){
                max = s.substring( l, r + 1 )
            }
            l--;
            r++;
        }
        // Even palindromes
        [l,r] = [ i, i + 1]
        while( (l >= 0 && r < s.length) && s[l] === s[r] ){
            if( s.substring( l, r + 1 ).length > max.length ){
                max = s.substring( l, r + 1 )
            }
            l--;
            r++;
        }
    }
    return max;
}

console.log( maxPal('cbbd') );