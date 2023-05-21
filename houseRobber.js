

function moneyPath( nums ){
    let [ left, max ] = [ 0, 0 ];
    let tmp;
    for ( const right of nums ){
        const tmp = max;
        max = Math.max( max, left + right );
        left = tmp;
    }
    return max;
}

var rob = (nums) => {
    if (!nums.length) return 0;

    let [ left, mid ] = [ 0, 0 ];

    for (const right of nums) {/* Time O(N) */
        const temp = mid;
        const house = left + right;

        mid = Math.max(mid, house);
        left = temp;
    }

    return mid;
};

let test = [ 10, 101, 9, 3, 99 ];
console.log( moneyPath(test))