

function longest( s, k ){
    let [ left, right ] = [0, 1];
    let maxSub = 0;
    let window = s.substring( left, right );
    let map = new Array( 26 ).fill( 0 );
    for( let i = 0; i < window.length; i++ ){
        map[ window[ i ].charCodeAt( 0 ) - 65 ]++;
    }
    while( right <= s.length ){
        let max = Math.max( ...map );
        // Check if window is valid
        if( window.length - max <= k ){
            if( window.length > maxSub ){
                maxSub = window.length;
            }
            right++;
            window = s.substring( left, right );
            map[ window[ window.length - 1 ].charCodeAt(0) - 65 ]++;
        }else{
            map[ window[ 0 ].charCodeAt( 0 ) - 65 ]--;
            left++;
            window = s.substring( left, right );
        }
    }
    return maxSub;
}

console.log( longest( 'ABAB', 2) );