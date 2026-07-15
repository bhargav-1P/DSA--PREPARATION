
// ============================================================

// #206 Reverse Linked List
// DAY 21: Spaced Retrieval

// ============================================================
// Write from memory — no peeking

var reverseList = function(head) {
    let curr=head;
    let prev=null
    while(curr!==null){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
};