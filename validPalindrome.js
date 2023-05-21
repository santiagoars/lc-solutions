
function validPalindrome( s ){
    const replaced = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let i = 0;
    let j = replaced.length - 1;
    while( i < j ){
        if( replaced.charAt(i) !== replaced.charAt(j) ){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log( validPalindrome( '!' ) )