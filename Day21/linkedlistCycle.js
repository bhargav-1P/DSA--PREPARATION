
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


// ============================================
// #83 - Remove Duplicates from Sorted List (Day 20)
// ============================================
// LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// PATTERN: Linked List – Skip Node
// TIME: O(n) | SPACE: O(1)
// STORY:
//   Walk a sorted list. If the next node has the same value,
//   skip it by pointing curr.next to the one after it.
//   Do NOT move forward after a skip—there might be more duplicates.

var deleteDuplicates = function(head) {
    let curr = head;

    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;  // skip duplicate
        } else {
            curr = curr.next;            // move forward
        }
    }

    return head;                         // head never moved
};


// ============================================
// #141 - Linked List Cycle (Day 21)
// ============================================
// LINK: https://leetcode.com/problems/linked-list-cycle/
// PATTERN: Two Pointers (Floyd’s Cycle Detection)
// TIME: O(n) | SPACE: O(1)

// STORY (Brute Force):
//   Store every visited node in a Set.
//   If you see the same node twice → cycle.
//   If you reach null → no cycle. O(n) space.

// STORY (Optimal – Floyd’s):
//   Two runners on a circular track.
//   Slow moves 1 step, fast moves 2 steps.
//   If there’s a cycle, fast will lap slow and they’ll meet.
//   If fast hits null, no cycle. O(1) space.


// BRUTE FORCE (O(n) time, O(n) space)
var hasCycleBrute = function(head) {
    let seen = new Set();
    let curr = head;

    while (curr !== null) {
        if (seen.has(curr)) return true;
        seen.add(curr);
        curr = curr.next;
    }
    return false;
};

// OPTIMAL (O(n) time, O(1) space)
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // 1 step
        fast = fast.next.next;      // 2 steps
        if (slow === fast) return true;  // they met → cycle
    }

    return false;                   // fast hit null → no cycle
};



// ============================================