// ============================================
// DAY 7 — June 27, 2026
// ============================================
// COMPLETED:
// ✅ Move Zeroes (#283) — Brute Force + Optimal
// ✅ Valid Palindrome (#125) — Retrieval
// ============================================


// ============================================
// LeetCode 283 - Move Zeroes
// ============================================

// APPROACH 1: Brute Force (Two Arrays)
// IDEA: Separate non-zeros and zeros into two arrays.
// Combine them and copy back to original array.
// TIME: O(n) | SPACE: O(n)

var moveZeroes = function(nums) {

    let nonZero = [];
    let zero = [];

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] !== 0) {
            nonZero.push(nums[i]);
        } else {
            zero.push(nums[i]);
        }
    }

    let result = nonZero.concat(zero);

    for(let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};

// APPROACH 2: Two Pointers — Fast & Slow (Optimal)
// IDEA: Slow pointer tracks landing spot for next non-zero.
// Fast pointer scans the array.
// When non-zero found, swap and advance slow pointer.
// TIME: O(n) | SPACE: O(1)

var moveZeroes = function(nums) {

    let l = 0;

    for(let r = 0; r < nums.length; r++) {

        if(nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
    }
};


// ============================================
// KEY LEARNINGS
// ============================================

// 1. Index vs Value:
//    ❌ if (r !== 0) → checking pointer position
//    ✅ if (nums[r] !== 0) → checking actual element

// 2. Language-specific methods:
//    Python: .append()
//    JavaScript: .push()

// 3. Destructuring swap in JavaScript:
//    [a, b] = [b, a] → swaps values without temp variable

// 4. Two Pointers (Fast & Slow) pattern:
//    Slow pointer = where next wanted element goes
//    Fast pointer = scans the array
//    Used when: "in-place", "maintain order", "move to end"

// 5. Don't `return` inside loops unless required.

// 7. Use HashSet when the problem involves:
//    - Duplicates
//    - Common elements
//    - Fast lookups
//    - Existence checks


// ============================================
// TEST CASES
// ============================================

// Move Zeroes:
// Input: [0,1,0,3,12] → Output: [1,3,12,0,0]
// Input: [0,0,1] → Output: [1,0,0]
// Input: [1,2,3] → Output: [1,2,3]


// ============================================
// PATTERN TRIGGERS
// ============================================

// Fast & Slow Pointers:
// Signal: "in-place", "maintain relative order", "move to end"
// Problems: #283, #27, #26, #75

// HashSet:
// Signal: "duplicates", "common elements", "intersection", "fast lookup"
// Problems: #217, #349