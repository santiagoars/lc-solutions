

function getHoursSpent( k, piles ){
    let totalHours = 0;
    for( let i = 0; i < piles.length; i++ ){
        totalHours += Math.ceil( piles[ i ] / k );
    }
    return totalHours;
}

function minEatingSpeed( piles, h ){
    let [ left, right ] = [ 1, Math.max(...piles) ];
    while( left < right ){
        const mid = ( left + right ) >> 1;
        const totalHours = getHoursSpent( mid, piles );
        if( totalHours > h ){
            left = mid + 1;
        }else if( totalHours <= h ){
            right = mid;
        }
    }
    return right;
}

console.log( minEatingSpeed( [30,11,23,4,20], 6) );
