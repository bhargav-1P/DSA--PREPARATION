// ============================================
// DAY 9 — June 29, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ Remove Element (#27) — Retrieval from memory
// ✅ Remove Duplicates (#26) — New Problem (Optimal)
// ✅ Move Zeroes (#283) — Retrieval from memory
// ============================================


// ============================================
// LeetCode 27 - Remove Element (RETRIEVAL)
// ============================================

// APPROACH: Two Pointers (Read & Write Head)
// STORY: Write pointer (i) stays at insertion point.
// Read pointer (j) scans ahead.
// When scanner finds a valid element (not equal to val),
// overwrite at write pointer and advance.
// Return i (count of valid elements).
// TIME: O(n) | SPACE: O(1)

var removeElement = function(nums, val) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};


// ============================================
// LeetCode 26 - Remove Duplicates from Sorted Array (NEW)
// ============================================

// APPROACH: Two Pointers (Read & Write Head)
// STORY: Array is SORTED. Write pointer (i) tracks the last unique element.
// Read pointer (j) starts at index 1 and scans ahead.
// When scanner finds a NEW element (different from what i points to),
// advance write pointer and overwrite with the new unique element.
// Return i + 1 (count of unique elements).
// TIME: O(n) | SPACE: O(1)

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};


// ============================================
// LeetCode 283 - Move Zeroes (RETRIEVAL)
// ============================================

// APPROACH: Two Pointers (Fast & Slow)
// STORY: Slow pointer (l) tracks where next non-zero goes.
// Fast pointer (r) scans the array.
// When scanner finds a non-zero element,
// swap with slow pointer and advance slow pointer.
// Zeros naturally get pushed to the end.
// TIME: O(n) | SPACE: O(1)

var moveZeroes = function(nums) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
    }
};


// ============================================
// PATTERN CONNECTION
// ============================================

// All three problems use the SAME engine:
// Read Pointer (scanner) + Write Pointer (insertion boundary)
//
// | Problem              | Trigger Condition  | Action              | Return  |
// |---------------------|-------------------|---------------------|---------|
// | #27 Remove Element   | nums[j] != val    | Overwrite at i      | i       |
// | #26 Remove Duplicates| nums[j] != nums[i]| i++, then overwrite | i + 1   |
// | #283 Move Zeroes     | nums[r] != 0      | Swap with l         | void    |


// ============================================
// TEST CASES
// ============================================

// Remove Element:
// Input: nums = [3,2,2,3], val = 3 → Output: 2, nums = [2,2,_,_]
// Input: nums = [0,1,2,2,3,0,4,2], val = 2 → Output: 5

// Remove Duplicates:
// Input: nums = [1,1,2] → Output: 2, nums = [1,2,_]
// Input: nums = [0,0,1,1,1,2,2,3,3,4] → Output: 5

// Move Zeroes:
// Input: nums = [0,1,0,3,12] → Output: [1,3,12,0,0]
// Input: nums = [0,0,1] → Output: [1,0,0]