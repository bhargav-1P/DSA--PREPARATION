// ============================================
// DAY 11 — July 01, 2026
// LeetCode 977 – Squares of a Sorted Array
// ============================================
// Pattern: Two Pointers (Ends to Center)
// Time: O(n)  |  Space: O(n)
// ============================================

/**
 * The "Two Giants" Story
 * 
 * Two giants stand at opposite ends of the array.
 * Each step I compare their squared power.
 * The taller giant (larger square) gets placed at the
 * last empty spot in my answer array.
 * The used giant leaves, so I move that pointer inward.
 * I repeat until no giants remain.
 * 
 * This works because the array is sorted, so the largest
 * squares always live at the two ends.
 */


// ============================================
// Optimal Solution – Two Pointers (Ends to Center)
// ============================================
var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    
    // Fill from the back – the largest squares get placed here first
    for (let i = n - 1; i >= 0; i--) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;
        
        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;         // left giant used, move forward
        } else {
            result[i] = rightSquare;
            right--;        // right giant used, move backward
        }
    }
    
    return result;
};


// ============================================
// Test Cases
// ============================================
// console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
// console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]