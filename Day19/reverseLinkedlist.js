// PROBLEM: #206 Reverse Linked List
// PATTERN: Linked List Iterative — Three Pointers
// TIME: O(n) | SPACE: O(1)
// THREE POINTERS: prev, curr, next
//
// WHY THREE POINTERS:
// next  → saves the forward connection before we break it
// curr  → the node we're currently reversing
// prev  → the node we already reversed (curr points back to this)
//
// WHY return prev and not curr:
// when loop ends → curr is null
// prev is sitting at last node = new head of reversed list
//
// ORDER INSIDE LOOP — never change this:
// 1. save next = curr.next    (save before breaking)
// 2. curr.next = prev         (flip the pointer)
// 3. prev = curr              (prev moves forward)
// 4. curr = next              (curr moves forward)

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;   // save next node
        curr.next = prev;       // flip pointer backward
        prev = curr;            // prev moves forward
        curr = next;            // curr moves forward
    }

    return prev;                // new head
}
// ============================================
// RETRIEVAL: Running sum - (#206)
// ============================================
var runningSum = function(nums) {
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];      // accumulate running total
        nums[i] = currentSum;       // store back in place — no extra array
    }

    return nums;
};