

function lengthOfLongestSubstring( s ){
    let l = 0;
    let r = l + 1;
    let set = new Set();
    let max = 0;
    if( s.length < 2 ){
        return s.length;
    }
    set.add( s[ l ] );
    while( l < s.length ){
        if( !set.has( s[ r ] ) ){
            set.add( s[ r ] );
            r++;
        }else{
            if( s.substring(l, r ).length > max ){
                max = s.substring(l, r ).length;
            }
            l++;
            r = l + 1;
            set.clear();
            set.add( s[ l ] );
        }
    }
    return max;
}

console.log( lengthOfLongestSubstring( " " ) );