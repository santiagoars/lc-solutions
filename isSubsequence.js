

function isSubsequence( s, t, index=0 ){
    if (s.length > t.length) return false;

    for (let i = 0; i < t.length; i++) {
        if (s[index] == t[i]) {
            index++;
        }
    }
    return s.length === index;
}

console.log( isSubsequence( "aec", "abcde"))