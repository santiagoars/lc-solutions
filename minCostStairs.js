

function minCost( cost ){
    cost.push( 0 );
    for( let i = cost.length - 2; i > -1; i-- ){
        const path1 = cost[ i ] + cost[ i + 1 ];
        const path2 = cost[ i ] + cost[ i + 2 ];
        if( !path2 ){
            cost[ i ] = path1;
        }else{
            cost[ i ] = Math.min( path1, path2 );
        }   
    }
    console.log( cost );
    cost.pop();
    return Math.min(...cost);
}

console.log( minCost( [1,100,1,1,1,100,1,1,100,1] ) )