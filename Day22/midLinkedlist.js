
// ============================================
// #141 - Linked List Cycle (retrival)
// ============================================

var hasCycle= function(head){
    let slow=head;
    let fast=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast) return true
    }
    return false
}
// ============================================================
// PROBLEM: #876 - Middle of Linked List
// DATE: Day 22
// PATTERN: Two Pointers — Fast & Slow
// TIME: O(n) | SPACE: O(1)
// ============================================================
//
// STORY:
// A train with carriages connected one by one.
// You need to find the middle carriage.
//
// BRUTE FORCE — Slow Station Master:
// Walk entire train → count all carriages
// Calculate middle index → walk back to that position
// Two walks. Gets the job done. Not efficient.
//
// OPTIMAL — Two Conductors:
// Slow walks 1 carriage at a time.
// Fast jumps 2 carriages at a time.
// When fast can't move → slow is at middle.
// One walk. Always lands at second middle for even lists.
//
// WHY both conditions in while:
// fast !== null      → fast itself exists
// fast.next !== null → prevents null.next TypeError
//                      fast jumps TWO steps —
//                      must confirm next exists before jumping
// ============================================================
// ============================================

// #876 Middle of the Linked List (Brute force Solution)

// ============================================

var middleNode =  function(head){
    // PASS 1: count all nodes
    let count = 0
    let curr=head;
    while(curr!==null){
        count++;
        curr=curr.next
    }
    // find middle index
    let middle= Math.floor(count/2)
    // PASS 2: walk to middle index
    curr=head                           // reset to start
    for(let i=0;i<middle;i++){
        curr=curr.next;                 //  move forward
    }return curr                        // middle node
}


// ============================================

// #876 Middle of the Linked List (Optimal Solution)

// ============================================

// OPTIMAL — O(n) time | O(1) space | ONE pass
// slow moves 1 step, fast moves 2 steps
// when fast hits end → slow is at middle

// ============================================
var middle =  function(head){
    let slow = head;
    let fast= head;
    while(fast!==nul && fast.next!==null){
        slow= slow.next;        // 1 step
        fast= fast.next.next    // 2 step
        
    }return slow;               // middle
};