

function longest( nums ){
    if( nums.length < 1 ){
        return 0;
    }
    let set = new Set( nums );
    let starts = new Map();
    for( const number of nums ){
        let prevNumber = number - 1;
        if( !set.has( prevNumber ) ){
            starts.set( number, 1 );
        }
    }
    for( let [key, value] of starts ){
        let currentNum = key + 1;
        while( set.has( currentNum ) ){
            starts.set( key, starts.get( key ) + 1);
            currentNum = currentNum + 1;
        }
    }
    let answer = Math.max( ...starts.values())
    return answer;
}

console.log( longest( [0,3,7,2,5,8,4,6,0,1] ) );