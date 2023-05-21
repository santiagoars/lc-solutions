

function checkSquare( x, y, board ){
    let set = new Set();
    let column = x;
    let row = y;
    let counter = 0;
    while( counter < 9 ){
        const element = board[ column ][ row ];
        if( !set.has( element ) && element !== '.' ){
            set.add( element );
        }else if( set.has( element ) ){
            return false;
        }
        row++;
        counter++;
        if( row % 3 === 0 ){
            column++;
            row = y;
        }
    }
    return true;
}

function checkRow( board ){
    let set = new Set();
    let counter = 0;
    while( counter < 9 ){
        const row = board[ counter ];
        for( let i = 0; i < row.length; i++ ){
            const element = row[ i ];
            if( !set.has( element ) && element !== '.' ){
                set.add( element );
            }else if( set.has( element ) ){
                return false;
            }
        }
        counter++;
        set.clear();
    }
    return true;
}

function checkColumn( board ){
    let set = new Set();
    let counter = 0;
    while( counter < 9 ){
        for( let i = 0; i < 9; i++ ){
            const element = board[ i ][ counter ];
            if( !set.has( element ) && element !== '.' ){
                set.add( element );
            }else if( set.has( element ) ){
                return false;
            }
        }
        counter++;
        set.clear();
    }
    return true;
}

function validSudoku( board ){
    let squareStars = [ [0,0], [0,3], [0,6],
                        [3,0], [3,3], [3,6],
                        [6,0], [6,3], [6,6] ];
    let squares = true;
    squareStars.forEach( ( start ) => {
        const valid = squares && checkSquare( start[ 0 ], start[ 1 ], board );
        if( !valid ){
            squares = valid;
        }
    });
    const rows = checkRow( board );
    const cols = checkColumn( board );
    return squares && rows && cols;
}

console.log( validSudoku( 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));