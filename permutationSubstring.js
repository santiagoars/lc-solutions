

function checkInclusion( s1, s2 ){
    let alphabet = [ ...'abcdefghijkmnlopqrstuvwxyz' ];
    let matches = 26;
    let map1 = {};
    let map2 = {};
    let window = s2.substring( 0, s1.length );
    if( s1.length > s2.length ){
        return false;
    }
    alphabet.forEach( ( letter ) => { 
        map1[ letter ] = 0;
        map2[ letter ] = 0;
    } );
    for( let i = 0; i < window.length; i++ ){
        map1[ s1[ i ] ]++;
        map2[ window[ i ] ]++;
    }
    console.log( map1, map2 );

    for( let i = 0; i < s1.length; i++ ){
        if( map1[ s1[ i ] ] !== map2[ s1[ i ] ] ){
            matches--;
        }
    }
    if( JSON.stringify( map1 ) === JSON.stringify( map2 ) ){
        console.log( 'entered!')
        return true;
    }
    for( let i = 1; i < s2.length - s1.length + 1; i++ ){
        if( map1[ window[ 0 ] ] === map2[ window[ 0 ] ] ){
            matches--;
        }
        map2[ window[ 0 ] ]--;
        window = s2.substring( i, s1.length + i );
        map2[ window[ window.length - 1 ] ]++;
        if( map1[ window[ window.length - 1 ] ] === map2[ window[ window.length - 1 ] ] ){
            matches++;
        }
        if( matches === 26 || JSON.stringify( map1 ) === JSON.stringify( map2 )){
            return true;
        }
    }
    return false;
}

console.log( checkInclusion( "ab", "a" ) );
