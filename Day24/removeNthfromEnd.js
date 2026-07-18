// ============================================
// DAY 24— July 18 2026 | DSA
// ============================================
// COMPLETED:
// ✅  Palindrome Linked List (#234) — Spaced Retrieval
// ✅  Remove Nth Node From End of List(#19) - New Problem (brute force)
// ============================================


// ============================================
// RETRIEVAL: Palindrome Linked List (#234)
// ============================================
var isPalindrome = function(head) {

    // STEP 1: Find middle (#876 Fast & Slow)
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           
        fast = fast.next.next;      
    }
    let middle = slow;              


    // STEP 2: Reverse second half (#206 Reverse List)
    let prev = null;
    let curr = middle;             

    while (curr !== null) {
        let next = curr.next;    
        curr.next = prev;           
        prev = curr;                
        curr = next;                
    }
    let revHalf = prev;             


    // STEP 3: Compare both halves
    let left = head;               
    let right = revHalf;            

    while (right !== null) {
        if (left.val !== right.val) return false;  
        left = left.next;           
        right = right.next;         
    }

    return true;                   
}

// ============================================================
// PROBLEM: #19 - Remove Nth Node From End of List
// PATTERN: Two Pass — Count then Remove
// TIME: O(n) | SPACE: O(1)
// ============================================================
// STORY — BRUTE FORCE
// ============================================================
//
// You're a train conductor. Someone says:
// "Remove the 2nd carriage from the back."
// You don't know how long the train is.
//
// WALK 1 — Count everything:
// Walk front to back. Count every carriage.
// [1]→[2]→[3]→[4]→[5]  total = 5
//
// MATH — Find position from front:
// target = total - n = 5 - 2 = 3
// But stop ONE BEFORE target to rewire:
// stop at position = target - 1 = 2
//
// WALK 2 — Walk to position before target:
// Start at head. Walk target-1 steps.
// [1]→[2] ← stop here (curr)
//
// REMOVE — Rewire the pointer:
// curr.next = curr.next.next
// [1]→[2]→[3]→[5]  ← [4] removed ✅
//
// EDGE CASE — Removing the head:
// n = total → target = 0
// Nothing before head to rewire from.
// Special rule: return head.next directly.
// ============================================================


// ============================================================
// BRUTE FORCE
// TIME: O(n) — two passes
// SPACE: O(1) — no extra data structure
// ============================================================

var removeNthFromEnd = function(head, n) {
    // PASS 1: count all nodes
    let count = 0;
    let curr = head;
    while (curr !== null) {
        count++;
        curr = curr.next;
    }

    // find target position from front
    let target = count - n;

    // EDGE CASE: removing the head itself
    if (target === 0) return head.next;

    // PASS 2: walk to node BEFORE target
    curr = head;
    for (let i = 0; i < target - 1; i++) {
        curr = curr.next;           // move forward only
    }

    // REMOVE: skip the target node
    curr.next = curr.next.next;

    return head;
};


// ============================================================

