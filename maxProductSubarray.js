

function maxProduct( nums ){
    let max = 0;
    let current = 0;
    let product = 0;
    for( let i = 0; i < nums.length; i++ ){
        current = nums[ i ];
        product = current;
        // Odd length subarrays
        let [ l, r ] = [ i - 1, i + 1 ];
        while( l >= 0 && r < nums.length ){
            product = product * nums[ l ] * nums[ r ];
            if( product > max ){
                max = product;
            }
            l--;
            r++;
        }
        // Even length subarrays
        [ l, r ] = [ i, i + 1 ];
        while( l >= 0 && r < nums.length ){
            product = product * nums[ l ] * nums[ r ];
            if( product > max ){
                max = product;
            }
            l--;
            r++;
        }
    }
}