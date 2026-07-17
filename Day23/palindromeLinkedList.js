// ============================================
// DAY 23 — July 17, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ Middle of Linked List (#876) — Spaced Retrieval
// ✅ Palindrome Linked List (#234) — New Problem (Fast & Slow + Reverse)
// ============================================


// ============================================
// RETRIEVAL: Middle of Linked List (#876)
// ============================================
// LINK: https://leetcode.com/problems/middle-of-the-linked-list/
// PATTERN: Fast & Slow Pointers
// STORY: "Two conductors on a train. Slow walks one carriage.
//         Fast jumps two. When fast can't move, slow is at middle."
// TIME: O(n) | SPACE: O(1)
// STATUS: Day 23 retrieval — zero peeks ✅

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // 1 step
        fast = fast.next.next;  // 2 steps
    }

    return slow;  // slow is at middle when fast stops
};


// ============================================
// NEW PROBLEM: Palindrome Linked List (#234)
// ============================================
// LINK: https://leetcode.com/problems/palindrome-linked-list/
// PATTERN: Three Patterns Combined — Fast/Slow + Reverse + Two Pointers
// TIME: O(n) | SPACE: O(1) optimal
//
// STORY — BRUTE FORCE:
// "A train inspector checks if a train is symmetric.
//  He walks the train and writes down every carriage number
//  in a notebook. Then he compares the notebook with its
//  mirror image. If they match — palindrome.
//  But the notebook takes O(n) extra space."
//
// STORY — OPTIMAL (Three Skills Combined):
// "A smarter inspector uses three skills:
//  SKILL 1 (#876): Find the middle of the train (fast & slow).
//  SKILL 2 (#206): Reverse the second half in place.
//  SKILL 3: Compare first half with reversed second half.
//  No notebook. No extra space. O(1)."


// ============================================
// APPROACH 1: Brute Force (Array + Reverse)
// ============================================
// IDEA: Collect all values into an array, compare with reverse.
// TIME: O(n) | SPACE: O(n)

var isPalindromeBrute = function(head) {
    let vals = [];
    let curr = head;

    // WALK 1: Collect all values
    while (curr !== null) {
        vals.push(curr.val);
        curr = curr.next;
    }

    // MIRROR TEST: Compare original with reversed
    return vals.join(',') === [...vals].reverse().join(',');
};


// ============================================
// APPROACH 2: Optimal (Fast/Slow + Reverse + Compare)
// ============================================

var isPalindrome = function(head) {

    // STEP 1: Find middle (#876 Fast & Slow)
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // 1 step
        fast = fast.next.next;      // 2 steps
    }
    let middle = slow;              // slow is at middle


    // STEP 2: Reverse second half (#206 Reverse List)
    let prev = null;
    let curr = middle;              // start from middle, NOT head

    while (curr !== null) {
        let next = curr.next;       // save next
        curr.next = prev;           // flip pointer backward
        prev = curr;                // move prev forward
        curr = next;                // move curr forward
    }
    let revHalf = prev;             // new head of reversed half


    // STEP 3: Compare both halves
    let left = head;                // start of first half
    let right = revHalf;            // start of reversed half

    while (right !== null) {
        if (left.val !== right.val) return false;  // mismatch
        left = left.next;           // move forward
        right = right.next;         // move forward
    }

    return true;                    // all matched — palindrome!
};


// ============================================
// VISUAL TRACE — [1, 3, 3, 1]
// ============================================
// STEP 1: Find middle
//   slow=1, fast=1 → slow=3, fast=3 → slow=3, fast=null
//   middle = second 3
//
// STEP 2: Reverse from middle
//   Input:  [3] → [1] → null
//   Output: [1] → [3] → null
//   revHalf = node(1)
//
// STEP 3: Compare
//   left=1, right=1 → match ✅
//   left=3, right=3 → match ✅
//   right=null → stop → return true
//
// VISUAL TRACE — [1, 2] (not palindrome)
//   middle = node(2)
//   revHalf = node(2)
//   left=1, right=2 → mismatch ❌ → return false



// ============================================
// TEST CASES
// ============================================
// Input: 1→3→3→1 → true
// Input: 1→2 → false
// Input: 1 → true (single node)


// ============================================
// PATTERN CONNECTION
// ============================================
// This problem combines three previously learned patterns:
// #876 Middle of Linked List — fast & slow pointers
// #206 Reverse Linked List — three pointer reversal
// Two Pointer Compare — left/right walking inward

// ============================================
