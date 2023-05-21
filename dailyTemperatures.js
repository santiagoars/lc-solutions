

function dailyTemperatures( temperatures ){
    let answer = [];
    for( let i = 0; i < temperatures.length; i++ ){
        let current = temperatures[ i ];
        let j = i + 1;
        while( j < temperatures.length ){
            if( temperatures[ j ] > current ){
                answer.push( j - i );
                break;
            }
            j++;
        }
        if( j === temperatures.length ){
            answer.push( 0 );
        }
    }
    return answer;
}

console.log( dailyTemperatures( [30,60,90] ) );