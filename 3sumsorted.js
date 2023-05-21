

function threeSum( nums ){
    let output = [];
    let prev;
    nums.sort( (a, b) => {
        return a - b;
    } );
    for( let i = 0; i < nums.length; i++ ){
        let element = nums[ i ];
        if( element !== prev ){
            let target = element * -1;
            if( element === 0){
                target = 0;
            }
            let pairs = twoSum( nums.slice( i + 1 , nums.length ), target );
            if ( pairs !== -1 ){
                pairs.forEach( ( pair ) => {
                    output.push( [ element, pair[ 0 ], pair[ 1 ] ] );
                } )
            }
            prev = element;
        }
    }
    return output;
}

function twoSum( nums, target ){
    let pairs = [];
    let [ i, j ] = [ 0, nums.length - 1 ];
    let sum = nums[ i ] + nums[ j ];
    let prev;
    while( i < j ){
        if( nums[ i ] !== prev ){
            if( sum < target ){
                i++;
            }else if( sum > target ){
                j--;
            }
            sum = nums[ i ] + nums[ j ];
            if( (sum === target && i !== j) ){
                pairs.push( [ nums[i], nums[j]] );
                prev = nums[ i ];
                i++;
            }
        }else{
            i++;
        }
    }
    return pairs.length > 0 ? pairs : -1;
}

console.log( threeSum( [0,0,0,0] ) );