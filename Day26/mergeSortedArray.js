// ============================================================
// PROBLEM: #21 - Merge Two Sorted Lists
// DATE: Day 23
// PATTERN: Dummy Node + Two Pointer
// TIME: O(n+m) | SPACE: O(1) optimal
// NEXT RETRIEVAL: Day 24
// ============================================================


// ============================================================
// STORY — BRUTE FORCE
// ============================================================
//
// Two bookshelves. Both already sorted by page count.
//
// Shelf 1: [1] → [2] → [4]
// Shelf 2: [1] → [3] → [4]
//
// The lazy librarian doesn't want to think.
//
// Step 1 — Grab everything, throw in a pile:
// Walk shelf 1. Write every number in notepad.
// Walk shelf 2. Write every number in notepad.
// notepad = [1, 2, 4, 1, 3, 4]  ← unsorted mess
//
// Step 2 — Sort the notepad:
// notepad = [1, 1, 2, 3, 4, 4]
//
// Step 3 — Build a new shelf from notepad:
// Place a blank placeholder book first (dummy).
// Attach each number one by one behind it.
// dummy → [1] → [1] → [2] → [3] → [4] → [4]
//
// Return dummy.next — skip placeholder, get real shelf.
//
// THE PROBLEM:
// Librarian touched every book twice.
// Notepad grows with input — O(n+m) extra space.
// ============================================================


// ============================================================
// BRUTE FORCE
// TIME: O(n+m) | SPACE: O(n+m) — extra array
// ============================================================

var mergeTwoListsBrute = function(list1, list2) {
    // STEP 1: collect all values
    let vals = [];

    while (list1 !== null) {
        vals.push(list1.val);       // write in notepad
        list1 = list1.next;         // next book
    }

    while (list2 !== null) {
        vals.push(list2.val);       // write in notepad
        list2 = list2.next;         // next book
    }

    // STEP 2: sort the notepad
    vals.sort((a, b) => a - b);

    // STEP 3: build new linked list from sorted values
    let dummy = { val: 0, next: null };  // placeholder
    let curr = dummy;

    for (let val of vals) {
        curr.next = { val: val, next: null };  // attach book
        curr = curr.next;                       // move hand
    }

    return dummy.next;              // skip placeholder
};


// ============================================================
// STORY — OPTIMAL
// ============================================================
//
// Same two shelves. Smarter librarian. No notepad.
//
// One rule only:
// "Look at the top book of both shelves.
//  Pick the smaller one. Attach it to result.
//  Move that shelf forward. Repeat."
//
// VISUAL:
// Shelf 1: 1 → 2 → 4
// Shelf 2: 1 → 3 → 4
//
// dummy →  (start here)
// curr = dummy  (librarian's hand)
//
// Round 1: shelf1 top=1, shelf2 top=1 → equal → pick shelf1
//          result: dummy → [1]
//          shelf1 moves: 2 → 4
//          curr moves to [1]
//
// Round 2: shelf1 top=2, shelf2 top=1 → pick shelf2
//          result: dummy → [1] → [1]
//          shelf2 moves: 3 → 4
//          curr moves to second [1]
//
// Round 3: shelf1 top=2, shelf2 top=3 → pick shelf1
//          result: dummy → [1] → [1] → [2]
//          shelf1 moves: 4
//          curr moves to [2]
//
// Round 4: shelf1 top=4, shelf2 top=3 → pick shelf2
//          result: dummy → [1] → [1] → [2] → [3]
//          shelf2 moves: 4
//          curr moves to [3]
//
// Round 5: shelf1 top=4, shelf2 top=4 → equal → pick shelf1
//          result: dummy → [1] → [1] → [2] → [3] → [4]
//          shelf1 empty
//          curr moves to [4]
//
// shelf1 empty → attach rest of shelf2 directly
// result: dummy → [1] → [1] → [2] → [3] → [4] → [4] ✅
//
// Return dummy.next — skip placeholder, real list starts here.
//
// THE WIN:
// No notepad. No extra space.
// Just rewiring existing pointers. O(1) space.
// ============================================================


// ============================================================
// MEMORY TRICK — say this before every attempt
// ============================================================
//
// DUMMY  → placeholder. val:0. always.
// CURR   → your hand. moves after every pick.
// PICK   → smaller val wins. equal? always pick list1.
// MOVE   → picked list's pointer moves forward.
// ATTACH → loop ends? attach whichever list remains.
// RETURN → dummy.next. never dummy itself.
//
// One sentence:
// "Dummy starts. Pick smaller. Move that list.
//  Curr follows. Leftover attached. Return dummy.next."
// ============================================================


// ============================================================
// OPTIMAL
// TIME: O(n+m) | SPACE: O(1) — rewires existing nodes
// ============================================================

var mergeTwoLists = function(list1, list2) {
    // placeholder — empty starting point
    let dummy = { val: 0, next: null };
    let curr = dummy;               // curr = librarian's hand

    // keep picking while both shelves have books
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            curr.next = list1;      // pick from shelf 1
            list1 = list1.next;     // shelf 1 moves forward
        } else {
            curr.next = list2;      // pick from shelf 2
            list2 = list2.next;     // shelf 2 moves forward
        }
        curr = curr.next;           // hand moves to picked book
    }

    // one shelf emptied — attach whatever remains directly
    if (list1 !== null) curr.next = list1;
    if (list2 !== null) curr.next = list2;

    // skip placeholder — return real merged list
    return dummy.next;
};


// ============================================================
// TESTS
// ============================================================

function buildList(arr) {
    if (!arr.length) return null;
    let head = { val: arr[0], next: null };
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = { val: arr[i], next: null };
        curr = curr.next;
    }
    return head;
}

function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.length ? result.join(' → ') : '(empty)');
}

console.log('--- Brute Force ---');
printList(mergeTwoListsBrute(buildList([1,2,4]), buildList([1,3,4]))); // 1→1→2→3→4→4
printList(mergeTwoListsBrute(buildList([]), buildList([])));           // empty
printList(mergeTwoListsBrute(buildList([]), buildList([0])));          // 0

console.log('--- Optimal ---');
printList(mergeTwoLists(buildList([1,2,4]), buildList([1,3,4])));      // 1→1→2→3→4→4
printList(mergeTwoLists(buildList([]), buildList([])));                // empty
printList(mergeTwoLists(buildList([]), buildList([0])));               // 0


// ============================================================
// BRUTE vs OPTIMAL
// ============================================================
//
// Brute:
// → collect all → sort → rebuild
// → O(n+m) space — notepad + new nodes
// → touches every node twice
//
// Optimal:
// → compare tops → pick smaller → rewire pointer
// → O(1) space — no new nodes created
// → touches every node exactly once
//
// Same time complexity O(n+m).
// Space is where optimal wins completely.
//



