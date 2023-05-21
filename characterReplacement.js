

function characterReplacement( s, k ){
    let longest = 0;
    let l = 0;
    let r = l + 1;
    let currentK = k;
    while( l < s.length ){
        const char = s[ l ];
        if( char === s[ r ] ){
            r++;
        }else if( currentK > 0 ){
            r++;
            currentK--;
        }else{
            if( longest < s.substring(l,r).length ){
                longest = s.substring(l,r).length;
            }
            l++;
            r = l + 1
            currentK = k;
        }
    }
    l = s.length - 1;
    r = l - 1;
    currentK = k;
    while( l > 0 ){
        const char = s[ l ];
        if( char === s[ r ] ){
            r--;
        }else if( currentK > 0 ){
            currentK--;
            if( r > 0 ){
                r--;
            }
        }else{
            if( longest < s.substring(r, l + 1).length ){
                longest = s.substring(r,l + 1).length;
            }
            l--;
            r = l - 1
            currentK = k;
        }
    }
    return longest;
}

console.log("Output: ", characterReplacement( "AABABBA", 1) );