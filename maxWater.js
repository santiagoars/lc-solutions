

function maxArea( height ){
    let [ i, j ] = [ 0, height.length ];
    let maxWater = 0;
    while( i < j ){
        const distance = j - i;
        const shortEnd = Math.min( height[ i ], height[ j ] );
        const area = distance * shortEnd
        if( area > maxWater ){
            maxWater = area;
        }

        if( height[ i ] < height[ j ] ){
            i++;
        }else{
            j--;
        }
    }
    return maxWater;
}

console.log( maxArea([5,5,5]) );