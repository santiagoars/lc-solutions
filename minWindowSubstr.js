

function minWindow( s, t ){
    const vals = {};
    for( let i = 0; i < t.length; i++ ){
        if( t[ i ] in vals ){
            vals[ t[ i ] ]++;
        }else{
            vals[ t[ i ] ] = 1;
        }
    }
    let progress = 0;
    let minStrGlob = '';
    let status = Object.assign( {}, vals );
    for( let i = 0; i < s.length; i++ ){
        let j = i;
        if(! (s[ j ] in status) ){
            continue;
        }else{
            while( progress < t.length && j < s.length  ){
                if( s[ j ] in status && status[ s[j] ] > 0){
                    progress++;
                    status[ s[ j ] ]--;
                }
                j++;
            }
            console.log( i, j, progress );
            if( progress === t.length ){
                if( minStrGlob.length === 0 ){
                    minStrGlob = s.substring(i,j);
                }else if( s.substring(i, j).length < minStrGlob.length ){
                    minStrGlob = s.substring(i,j);
                }
            }
            progress = 0;
            status = Object.assign( {}, vals );
        }
    }
    return minStrGlob;
}

console.log( minWindow( 'DAOBECODEBANC', 'ABC' ) );