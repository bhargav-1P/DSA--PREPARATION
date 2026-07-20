// ============================================
// DAY 25 — July 19, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ Remove Nth Node From End (#19) — Optimal (Fast/Slow with Dummy)
// ============================================


// ============================================
// NEW PROBLEM: Remove Nth Node From End (#19) — OPTIMAL
// ============================================

// PATTERN: Two Pointer Gap (Fast & Slow with Fixed Distance)
// TIME: O(n) — one pass | SPACE: O(1)
//
// STORY — "The Two Detectives and the Criminal":
//
// Two detectives must remove a criminal hiding in the n-th
// carriage from the back of a train. They don't know the
// length of the train.
//
// THE PLAN — Gap Strategy:
// Detective Fast walks n steps ahead first.
// Then both detectives walk together.
// When Fast reaches the last carriage, Slow is standing
// right before the criminal.
//
// WHY IT WORKS — The Math:
// n = 2
// Train: [1] → [2] → [3] → [4] → [5] → null
//
// Fast moves 2 steps ahead: Fast = 3, Slow = 1
// Gap between them = 2 = n ✅
//
// Now both walk together — the gap stays exactly n:
// Step 1: Fast=4, Slow=2  (gap=2)
// Step 2: Fast=5, Slow=3  (gap=2)
// Fast.next = null → STOP
//
// Slow is at 3. Slow.next = 4 → the criminal ✅
//
// THE REMOVAL:
// Slow at [3] → [4] → [5]
//               ↑ criminal
// Slow.next = Slow.next.next
// [3] → [5]  ← criminal gone ✅
//
// THE EDGE CASE — Criminal Is The First Carriage:
// Train: [1] → [2], n = 2
// Fast moves 2 steps: Fast = null (off the train)
// That means: remove the HEAD itself.
// Special rule: return head.next directly.
//
// PATTERN FAMILY:
// #876 — gap closes (fast moves 2x, find middle)
// #141 — gap closes (cycle detection)
// #19  — gap stays FIXED (n steps apart)
// Same two pointers. Different goal.
//
// ONE LINE TO REMEMBER:
// "Fast goes n steps ahead. Both walk together.
//  Gap stays fixed. When Fast stops — Slow is at the victim."

// ============================================
// OPTIMAL — Two Pointer Gap 
// ============================================

var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;

    // STEP 1: Fast scouts n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // EDGE CASE: Fast fell off the train
    // That means the target is the head itself
    if (fast === null) {
        return head.next;
    }

    // STEP 2: Both walk together
    // Gap between slow and fast stays exactly n
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // STEP 3: Skip the criminal
    // Slow is right before the target
    slow.next = slow.next.next;

    return head;
};


// ============================================
// VISUAL TRACE — [1, 2, 3, 4, 5], n = 2
// ============================================
//
// Setup: slow=1, fast=1
//
// STEP 1: Fast moves n=2 steps
// fast=2, fast=3
// slow=1, fast=3
// Gap = 2 ✅
//
// STEP 2: Both walk together
// while (fast.next !== null):
//   Iteration 1: fast=4, slow=2
//   Iteration 2: fast=5, slow=3
//   fast.next = null → STOP
//
// Slow is at node 3
// Target = slow.next = node 4
//
// STEP 3: Skip target
// slow.next = slow.next.next
// 3 → 5
// Node 4 removed ✅


// ============================================
// EDGE CASE — Remove head, [1, 2], n = 2
// ============================================
//
// Setup: slow=1, fast=1
//
// STEP 1: Fast moves n=2 steps
// fast=2, fast=null
//
// fast === null → return head.next
// Returns node 2 as new head
// Node 1 (old head) removed ✅
