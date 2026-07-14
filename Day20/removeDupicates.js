// ============================================================
// // PROBLEM: #83 Remove Duplicates from Sorted List
// PATTERN: Linked List
// TIME: O(n) | SPACE: O(1)
// STORY: Walk the list. If next node is duplicate → skip it.
//        Don't move forward after skip — might be more duplicates.
//        Move forward only when next is different.
// KEY LINE: curr.next = curr.next.next
// WHY return head: head never moved. still points to list start.
// Recall of Reverse Linked List
// ============================================================
var deleteDuplicates = function (head) {
    let curr = head;
    while(curr!==null && curr.next!==null){
        if(curr.val===curr.next.val){
            curr.next= curr.next.next
        }else{
            curr=curr.next
        }
    }return head;

}; 

// ============================================================
// // PROBLEM: #206 Reverse Linked List

// ============================================================

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;   
        curr.next = prev;      
        prev = curr;           
        curr = next;            
    }

    return prev;               
}