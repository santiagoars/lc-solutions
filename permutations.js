

const permutations = (nums) => {
    const result = [];
    if( nums.length === 1 ){
        return [ nums.slice() ];
    }else{
        for( let i = 0; i < nums.length; i++ ){
            const element = nums.shift();
            const perms = permutations( nums );
            perms.forEach( ( perm ) => {
                perm.push( element );
            });
            result.push( ...perms );
            nums.push( element );
        }
        return result;
    }
}

console.log( permutations( [1,2,3,4] ) );