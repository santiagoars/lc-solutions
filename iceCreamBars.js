

function iceCream( costs, coins ){
    let maxBars = 0;
    for( let i = 0; i < costs.length; i++ ){
        let current = costs[ i ];
        let currentBars = 0;
        if( current < coins ){
            maxBars++;
        }
    }
}