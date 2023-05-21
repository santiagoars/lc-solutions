

function groupAnagrams( strs ){
    const map = new Map();
    let key = Array( 26 ).fill( 0 );
    for( let i = 0; i < strs.length; i++ ){
        const word = strs[ i ];
        for( let j = 0; j < word.length; j++ ){
            const char = word[ j ];
            const num = char.charCodeAt(0) - 97;
            key[ num ]++;
        }
        if( map[ key ] ){
            map[ key ].push( word );
        }else{
            map[ key ] = [ word ];
        }
        key = Array( 26 ).fill( 0 );
    }
    return Object.values( map );
}

console.log( groupAnagrams( [ '' ] ) );