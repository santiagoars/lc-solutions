

function twoSum( numbers, target ){
    let [ i, j ] = [0, numbers.length - 1 ];
    let sum = numbers[ i ] + numbers[ j ];
    while( sum !== target ){
        if( sum < target ){
            i++;
        }else if( sum > target ){
            j--;
        }
        sum = numbers[ i ] + numbers[ j ];
    }
    return [i + 1, j + 1];
}

console.log( twoSum( [1,3,5,6,7,8,10], 10) );