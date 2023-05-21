

function rainWater( height ){
    const maxLeft = [];
    const maxRight = [];
    let globalLeft = 0;
    let globalRight = 0;
    let water = 0;
    // Max height to the left
    for( let i = 0; i < height.length; i++ ){
        if( height[ i ] > globalLeft ){
            globalLeft = height[ i ];
        }
        maxLeft.push( globalLeft );
    }

    //Max height to the right
    for( let i = height.length - 1; i > -1; i-- ){
        if( height[ i ] > globalRight ){
            globalRight = height[ i ];
        }
        maxRight.unshift( globalRight );
    }

    for( let i = 0; i < height.length; i++ ){
        const minY = maxLeft[ i ] < maxRight[ i ] ? maxLeft[ i ] : maxRight[ i ];
        if( minY > 0 ){
            water += minY - height[ i ];
        }
    }
    return water;
}

function rainWater2( height ){
    let i = 0;
    let j = height.length - 1;
    let maxL = height[ i ];
    let maxR = height[ j ];
    let water = 0;
    while( i < j ){
        if( maxL <= maxR ){
            i++;
            if( maxL - height[ i ] > 0){
                water += maxL - height[ i ];
            }
            if( height[ i ] > maxL ){
                maxL = height[ i ];
            }
        }else{
            j--;
            if( maxR - height[ j ] > 0){
                water += maxR - height[ j ];
            }
            if( height[ j ] > maxR ){
                maxR = height[ j ];
            }
        }
    }
    return water;
}

console.log( rainWater2( [2,1,0,1,2,0,1,3,2,1,2,1] ) );