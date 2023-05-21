
function isValidSudoku( board ){
    let i = 0;
    let j = 0;
    while(i !== 9){
        if(!validateSquare(i, j)){
            return false;
        }
        j += 3;
        if( j === 9 ){
            j = 0;
            i += 3;
        }
    }
    return validateRow( board ) && validateColumn( board );
}

function validateSquare(x, y){
    let counter = 0;
    let set = new Set();
    const initialX = x;
    while(counter < 9){
        const element = board[y][x];
        if( element !== '.'){
            if(set.has(element)){
                return false;
            }else{
                set.add(element);
            }
        }
        x++;
        counter++;
        if(counter % 3 === 0){
            x = initialX;
            y++;
        }
    }
    return true;
}

function validateRow(board){
    for( let i = 0; i < 9; i++){
        let set = new Set();
        for(let j = 0; j < 9; j++){
            const element = board[i][j];
            if( element !== '.' ){
                if( set.has( element ) ){
                    return false;
                }else{
                    set.add( element)
                }
            }
        }
    }
    return true
}

function validateColumn( board ){
    for( let i = 0; i < 9; i++){
        let set = new Set();
        for(let j = 0; j < 9; j++){
            const element = board[j][i];
            if( element !== '.' ){
                if( set.has( element ) ){
                    return false;
                }else{
                    set.add( element)
                }
            }
        }
    }
    return true;
}

const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

//console.log( validateSquare(6,6) );
//console.log( validateRow( board ) );
//console.log( validateColumn( board ) );
console.log( isValidSudoku( board ) );