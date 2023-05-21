
const graph = {
    'a' : ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': []
};

function dfs( graph ){
    const nodes = Object.keys( graph );
    const visited = [];
    const stack = [ nodes[ 0 ] ];
    while( stack.length > 0 ){
        const current = stack.pop();
        visited.push( current );
        for( let i = graph[ current ].length - 1; i >= 0; i-- ){
            stack.push( graph[ current ][ i ] );
        }
    }
    return visited;
}

function bfs( graph ){
    const nodes = Object.keys( graph );
    const visited = [];
    const queue = [ nodes[ 0 ] ];
    while( queue.length > 0 ){
        const current = queue.shift();
        visited.push( current );
        for( let i = 0; i < graph[ current ].length; i++ ){
            queue.push( graph[ current ][ i ] );
        }
    }
    return visited;
}

console.log( bfs( graph ) );