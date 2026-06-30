// ============================================
// DAY 10 — June 30, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ First Bad Version (#278) — Brute Force + Optimal (Binary Search)
// ✅ Remove Duplicates (#26) — Retrieval from memory
// ✅ Remove Element (#27) — Retrieval from memory
// ✅ Move Zeroes (#283) — Retrieval from memory
// ============================================


// ============================================
// LeetCode 278 - First Bad Version
// ============================================

// APPROACH 1: Brute Force (Linear Search)
// IDEA: Scan every version from 1 to n.
// First time isBadVersion returns true, return that version.
// TIME: O(n) | SPACE: O(1)

var solution = function(isBadVersion) {
    return function(n) {
        for (let i = 1; i <= n; i++) {
            if (isBadVersion(i)) {
                return i;
            }
        }
    };
};


// APPROACH 2: Optimal (Binary Search)
// IDEA: Use two boundaries (low, high) to trap the first bad version.
// Check midpoint. If bad → search left (high = mid).
// If good → search right (low = mid + 1).
// When low and high meet, that's the answer.
// TIME: O(log n) | SPACE: O(1)

var solution = function(isBadVersion) {
    return function(n) {
        let low = 1;
        let high = n;
        
        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);
            
            if (isBadVersion(mid)) {
                high = mid;       // First bad is at mid or left
            } else {
                low = mid + 1;    // First bad is strictly right
            }
        }
        
        return low;  // low === high, first bad version
    };
};


// ============================================
// PATTERN: Binary Search
// ============================================
// TRIGGER: "Sorted", "find first/last", "search space can be halved"
// KEY IDEA: Cut search space in half each step. O(log n).
//
// Why high = mid (not mid - 1)?
// Because mid itself could be the answer.
// If we did high = mid - 1, we might skip the first bad version.
//
// Why low = mid + 1?
// Because if mid is good, everything up to mid is good.
// The bad version must be after mid.
//
// Why low + (high - low) / 2 instead of (low + high) / 2?
// Prevents integer overflow when low + high is very large.


// ============================================
// LeetCode 26 - Remove Duplicates (RETRIEVAL)
// ============================================

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
// LeetCode 27 - Remove Element (RETRIEVAL)
// ============================================

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
// LeetCode 283 - Move Zeroes (RETRIEVAL)
// ============================================

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
// KEY LEARNINGS (Day 10)
// ============================================

// 1. Binary Search vs Two Pointers:
//    Two Pointers = scan entire array (O(n))
//    Binary Search = cut space in half (O(log n))
//    Don't confuse them. Different tools for different problems.

// 2. The Boundary Trap:
//    high = mid (not mid-1) because mid could be the answer.
//    low = mid + 1 because mid is definitely not the answer.


// 5. The 3-Time Recall Drill:
//    Attempt 1: After video. Stumbled on boundary logic.
//    Attempt 2: Evening. Blank file. Built from scratch.
//    Attempt 3: Before commit. Side-by-side with brute force.
//    This locks patterns into long-term memory.

// 6. Syntax Knots:
//    Tried treating n as array (checking .length).
//    n is a primitive integer, not an array.
//    Fixed by reading problem constraints carefully.


// ============================================
// TEST CASES
// ============================================

// First Bad Version:
// n = 5, bad = 4 → Output: 4
// n = 1, bad = 1 → Output: 1

// Remove Duplicates:
// [1,1,2] → 2, [1,2,_]
// [0,0,1,1,1,2,2,3,3,4] → 5

// Remove Element:
// [3,2,2,3], val=3 → 2, [2,2,_,_]

// Move Zeroes:
// [0,1,0,3,12] → [1,3,12,0,0]


// ============================================
// COMPLEXITY COMPARISON
// ============================================

// | Problem              | Brute Force | Optimal      |
// |---------------------|-------------|--------------|
// | First Bad Version    | O(n)        | O(log n)     |
// | Remove Duplicates    | O(n)        | O(n)         |
// | Remove Element       | O(n²)       | O(n)         |
// | Move Zeroes          | O(n²)       | O(n)         |