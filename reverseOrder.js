

var reverseWords = function(s) {
    let res = "";
    let i = s.length -1; 
    while( i >= 0 ){
        if( s[ i ] !== " "){
            const word = getWord( i, s );
            res += word[ 1 ] + " ";
            i = word[ 0 ];
        }else{
            i--;
        }
    }
    return res.substring( 0, res.length - 1 );
};

function getWord( i, s ){
    let j = i;
    while( s[ j ] !== " " && s[ j ]){
        j--;
    }
    return [j - 1, s.substring( j + 1, i + 1)];
}

console.log( reverseWords( "  Tec de  Monterrey  " ) );