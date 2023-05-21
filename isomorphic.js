

var isIsomorphic = function(s, t) {
    const sMap = {};
    const tMap = {};
    for( let i = 0; i < s.length; i++ ){
        if( !(s[ i ] in sMap) && !(t[ i ] in tMap) ){
            sMap[ s [ i ] ] = t[ i ];
            tMap[ t [ i ] ] = s[ i ];
        }else if( (s[ i ] in sMap && !(t[ i ] in tMap))){
            return false;
        }else if( (!(s[ i ] in sMap) && (t[ i ] in tMap))){

        }
    }
    return true;
};

console.log( isIsomorphic( "foo", "bar") );