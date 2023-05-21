

function findRow( matrix, target ){
    if( matrix.length === 1 ){
        return 0;
    }else if( target < matrix[ 0 ][ 0 ] ){
        return -1;
    }
    for( let i = 0; i < matrix.length; i++ ){
        const head = matrix[ i ][ 0 ];
        if( target < head ){
            return i - 1;
        }
    }
    return matrix.length -1;
}

function searchMatrix( matrix, target ){
    const rowNumber = findRow( matrix, target )
    if( rowNumber === -1 ){
        return false;
    }
    const row = matrix[ rowNumber ];
    let left = 0;
    let right = row.length;
    let mid = Math.floor( row.length / 2 );
    while( left <= right ){
        if( row[ mid ] === target ){
            console.log( mid );
            return true;
        }else if( row[ mid ] < target ){
            left = mid + 1;
            mid = Math.floor( ( right + left ) / 2 );
        }else{
            right = mid - 1;
            mid = Math.ceil( ( right + left ) / 2 );
        }
    }
    return false;
}

console.log( searchMatrix( [[1],[3]], 0 ) );