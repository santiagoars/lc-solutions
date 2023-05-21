

function twoSumSorted( numbers, target ){
    let i = 0;
    let j = numbers.length - 1;
    while( numbers[i] + numbers[j] !== target){
        const sum = numbers[i] + numbers[j];
        if( sum < target){
            i++;
        }else{
            j--;
        }
    }
    return i < j ? [ i+1, j+1 ] : [j+1, i+1];
}