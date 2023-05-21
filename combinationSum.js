

function combinationSum( candidates, target, sum=0, index=0, state=[], result=[] ){
    if( sum === target ){
        return result.push( state.slice() );
    }else if( sum > target ){
        return;
    }else{
        for( let i = index; i < candidates.length; i++ ){
            state.push( candidates[ i ] );
            combinationSum( candidates, target, sum + candidates[ i ], i, state, result );
            state.pop();
        }
    }
    return result;
}

console.log( combinationSum( [1,2,3,4], 5 ))