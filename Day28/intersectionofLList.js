// ============================================
// DAY 28 — July 22, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ Reverse Linked List (#206) — Spaced Retrieval
// ✅ Remove Duplicates from Sorted List (#83) — Spaced Retrieval
// ✅ Intersection of Two Linked Lists (#160) — New Problem (Length Difference Alignment)
// ============================================


// ============================================
// NEW PROBLEM: Intersection of Two Linked Lists (#160)
// ============================================
// LINK: https://leetcode.com/problems/intersection-of-two-linked-lists/
// PATTERN: Two Pointers — Length Difference Alignment
// TIME: O(n+m) optimal | O(n*m) brute
// SPACE: O(1) both
// NEXT RETRIEVAL: Day 29
//
// STORY:
// Two roads merging into one.
// Road A: 1 → 2 → 6 → 7 → 8 → null   (length 5)
// Road B: 3 → 6 → 7 → 8 → null        (length 4)
// They merge at node 6. After that — same road, same nodes.
//
// KEY INSIGHT:
// Road A has 2 lampposts before merge.
// Road B has 1 lamppost before merge.
// They're at different distances from the merge point.
// If you move A's traveller 1 step ahead first —
// both travellers are now the same distance from merge.
// Walk together. They meet exactly at the intersection.
//
// OPTIMAL STEPS:
// 1. Count length of A
// 2. Count length of B
// 3. Move longer list's pointer forward by the difference
// 4. Move both together — first meeting point = intersection


// ============================================
// APPROACH 1: Brute Force
// ============================================
// IDEA: For every node in A, check every node in B.
//       If same NODE (not same value) → intersection found.
// TIME: O(n*m) — nested loops
// SPACE: O(1)

var getIntersectionNodeBrute = function(headA, headB) {
    let curr = headA;

    while (curr !== null) {
        let curr1 = headB;              // reset B for every node in A

        while (curr1 !== null) {
            if (curr === curr1) return curr;  // same node → intersection
            curr1 = curr1.next;
        }

        curr = curr.next;
    }

    return null;                        // no intersection found
};


// ============================================
// APPROACH 2: Optimal — Length Difference Alignment
// ============================================

var getIntersectionNode = function(headA, headB) {
    // STEP 1: Count lengths of both lists
    let curr = headA;
    let curr1 = headB;
    let count = 0;
    let count1 = 0;

    while (curr !== null) {
        count++;
        curr = curr.next;
    }

    while (curr1 !== null) {
        count1++;
        curr1 = curr1.next;
    }

    // STEP 2: Reset pointers and align starting positions
    curr = headA;
    curr1 = headB;

    if (count > count1) {
        let diff = count - count1;
        for (let i = 0; i < diff; i++) {
            curr = curr.next;           // move A forward by difference
        }
    } else if (count1 > count) {
        let diff = count1 - count;
        for (let i = 0; i < diff; i++) {
            curr1 = curr1.next;         // move B forward by difference
        }
    }

    // STEP 3: Move both together until they meet
    while (curr !== null && curr1 !== null) {
        if (curr === curr1) return curr;  // same node → intersection
        curr = curr.next;
        curr1 = curr1.next;
    }

    return null;                        // no intersection
};

// ============================================
// COMPLEXITY COMPARISON
// ============================================
// Brute Force: O(n*m) time, O(1) space
// Optimal:     O(n+m) time, O(1) space


// ============================================
// PATTERN FAMILY — Two Pointers Gap Strategies
// ============================================
// #19 Remove Nth From End → fixed gap of n
// #876 Middle of List     → fast/slow, gap closes
// #141 Cycle Detection    → fast/slow, detect meeting
// #160 Intersection       → length difference alignment
//
// All use pointer gap strategy. Different goals.
// Ask: "Do I need them to meet? Find middle? Stay n apart? Align?"
// The answer tells you which variation to use.


// ============================================
// TEST CASES
// ============================================
// (Run on LeetCode with provided list structures)
// Intersecting lists: 4→1→8→4→5 and 5→6→1→8→4→5 → return node with value 8
// Non-intersecting: 2→6→4 and 1→5 → return null


