

function longestPalindrome( s ){
    let map = {};
    let maxPal = 0;
    for( const char of s ){
        map[ char ] = ( map[ char ] || 0 ) + 1;
        if( map[ char ] % 2 === 0 ){
            maxPal+= 2;
        }
    }
    return s.length > maxPal ? maxPal +1 : maxPal;
}

console.log( longestPalindrome( "ccc" ) );