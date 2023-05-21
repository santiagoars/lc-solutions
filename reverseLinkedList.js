

function reverse( head ){
    let current = head;
    let last = null;
    let pointer = null;
    while( current ){
        pointer = current.next;
        current.next = last;
        last = current;
        current = pointer;
    }
    return last;
}