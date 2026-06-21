
// ============================================
// PROBLEM: LeetCode #1 - Two Sum
// LINK: https://leetcode.com/problems/two-sum/
// DIFFICULTY: Easy
// PATTERN: Brute Force (Nested Loops)
// PATTERN CATEGORY: Array - Pair Search
// ============================================
// CONCEPT: Check every possible pair (i, j) where i < j.
// If nums[i] + nums[j] === target, return [i, j].
// ============================================
// TIME: O(n²) - nested loops through array
// SPACE: O(1) - no extra data structure used
// ============================================

var twoSum = function(nums, target) {
    // Outer loop: pick first element
    for (let i = 0; i < nums.length; i++) {
        // Inner loop: pick second element (start after i to avoid duplicates and same element)
        for (let j = i + 1; j < nums.length; j++) {
            // Check if current pair sums to target
            if (nums[i] + nums[j] === target) {
                // Return both indices immediately
                return [i, j];
            }
        }
    }
    // Problem guarantees exactly one solution, but return empty for completeness
    return [];
};

// ============================================
// TEST CASE:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9
// ============================================

// ============================================
// OPTIMIZED SOLUTION: To be added later
// Pattern: Hash Map / Complement Search
// Time: O(n), Space: O(n)
// Will revisit in evening revision block
// ============================================
