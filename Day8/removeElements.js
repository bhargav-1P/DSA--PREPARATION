// ============================================
// WEEK 2: DAY 8 — LeetCode 27 (Remove Element)
// ============================================
// PATTERN: Two Pointers (Read & Write Head)
// CATEGORY: Array — In-Place Removal
// ============================================


// ============================================
// APPROACH 1: Brute Force (Array Shifting via Splice)
// ============================================
// TIME: O(n²) | SPACE: O(1)
// STORY: Walk through array. If element matches val,
// remove it with splice(). Step back index to check
// the element that slid into current position.

var removeElementBrute = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;  // Check shifted element
        }
    }
    return nums.length;
};


// ============================================
// APPROACH 2: Optimal (Two Pointers — Overwrite Strategy)
// ============================================
// TIME: O(n) | SPACE: O(1)
// STORY:
// i = Write Pointer (where next valid element goes)
// j = Read Pointer (scans the array)
// When j finds a valid element (!= val):
//   Overwrite nums[i] with nums[j]
//   Advance write pointer (i++)
// Return i (count of valid elements)

var removeElementOptimal = function(nums, val) {
    let i = 0;  // Write Pointer

    for (let j = 0; j < nums.length; j++) {  // j = Read Pointer
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};


// ============================================
// PATTERN RECOGNITION: Read & Write Pointers
// ============================================
// Signal words: "in-place", "remove", "maintain order"
//
// How it works:
// - Slow pointer (i) = insertion boundary
// - Fast pointer (j) = scanner looking for valid elements
//
// Same pattern in:
// - LeetCode 283 (Move Zeroes): swap when non-zero found
// - LeetCode 27 (Remove Element): overwrite when not-equal to val


// ============================================
// TEST CASES
// ============================================
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,3,0,4,_,_,_]