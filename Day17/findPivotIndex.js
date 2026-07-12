// ============================================
// DAY 17 — July 11, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ Range Sum Query - Immutable (#303) — Spaced Retrieval
// ✅ Find Pivot Index (#724) — New Problem (Prefix Sum variation)
// ✅ flavour Town — Built & Deployed
// ============================================


// ============================================
// RETRIEVAL: Range Sum Query - Immutable (#303)
// ============================================
// LINK: https://leetcode.com/problems/range-sum-query-immutable/
// PATTERN: Prefix Sum
// STORY: "The Restaurant Ledger"
//
// Imagine running a restaurant ledger. Daily transaction numbers
// flow into your system: nums = [-2, 0, 3, -5, 2, -1].
// An auditor repeatedly demands the net total from Day 2 to Day 5.
//
// THE NAIVE WAY: Every time he asks, you loop through indices.
// If he asks 1,000 times, you run 1,000 loops. This causes TLE.
//
// THE PREFIX SUM WAY: You build a cumulative balance ledger ONCE.
// Day 0 begins at baseline 0. Each next day takes yesterday's
// total and adds today's cash value:
//   prefix[i + 1] = prefix[i] + nums[i]
//
// When the auditor asks for [left, right], you run ZERO loops.
// Instant lookup: prefix[right + 1] - prefix[left]
//
// TIME: O(n) build | O(1) query | SPACE: O(n)
// STATUS: Day 17 retrieval — zero peeks ✅

var NumArray = function(nums) {
    // Array length is nums.length + 1 to house the safe 0 anchor
    // This prevents negative lookup errors when left is 0
    this.prefix = new Array(nums.length + 1).fill(0);
    
    // One loop to pre-compute the running balance book
    for (let i = 0; i < nums.length; i++) {
        // Today's balance = Yesterday's balance + Today's transaction
        this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    // Instant lookup subtraction. O(1) constant time.
    return this.prefix[right + 1] - this.prefix[left];
};


// ============================================
// NEW PROBLEM: Find Pivot Index (#724)
// ============================================
// LINK: https://leetcode.com/problems/find-pivot-index/
// PATTERN: Prefix Sum (Equilibrium)
// STORY: "The Balanced See-Saw"
//
// Imagine a see-saw holding heavy boxes: nums = [1, 7, 3, 6, 5, 6].
// You must find the exact index to place the pivot so the total
// weight on the left perfectly balances the right.
//
// If we pick index 3 (value 6) as pivot:
//   Left sum: 1 + 7 + 3 = 11
//   Right sum: 5 + 6 = 11
// The see-saw balances! Index 3 is our equilibrium point.
//
// THE METHOD:
// 1. Calculate grand total sum once (totalSum = 28).
// 2. Keep a running left sum as you move forward.
// 3. Derive right sum mathematically — NO nested loops:
//    rightSum = totalSum - leftSum - currentBoxWeight
// 4. If leftSum === rightSum, return the index immediately.
// 5. If no balance found, return -1.
//
// TIME: O(n) | SPACE: O(1)


// ============================================
// APPROACH 1: Brute Force (Nested Loops)
// ============================================
// IDEA: For each index, calculate left sum and right sum separately.
// TIME: O(n²) — for each index, we loop through left and right
// SPACE: O(1)

var pivotIndexBrute = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
        // Sum everything to the left
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }
        
        // Sum everything to the right
        for (let j = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }
        
        if (leftSum === rightSum) return i;
    }
    return -1;
};


// ============================================
// APPROACH 2: Prefix Sum — Optimal
// ============================================

var pivotIndex = function(nums) {
    // Step 1: Compute the grand total of the entire array once
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    
    // Step 2: Initialize running left sum tracker
    let leftSum = 0;
    
    // Step 3: Walk through each index to find equilibrium
    for (let i = 0; i < nums.length; i++) {
        // Derive right sum WITHOUT a nested loop
        // rightSum = totalSum - leftSum - currentElement
        let rightSum = totalSum - leftSum - nums[i];
        
        // If left balances right, return this index
        if (leftSum === rightSum) {
            return i;
        }
        
        // Accumulate current element into leftSum
        // before moving to the next position
        leftSum += nums[i];
    }
    
    // No equilibrium point found
    return -1;
};


// ============================================
// TRACE EXAMPLE (The Balanced See-Saw)
// ============================================
// nums = [1, 7, 3, 6, 5, 6]
// totalSum = 1 + 7 + 3 + 6 + 5 + 6 = 28
//
// i=0: nums[0]=1, leftSum=0
//      rightSum = 28 - 0 - 1 = 27
//      0 !== 27 → continue
//      leftSum = 0 + 1 = 1
//
// i=1: nums[1]=7, leftSum=1
//      rightSum = 28 - 1 - 7 = 20
//      1 !== 20 → continue
//      leftSum = 1 + 7 = 8
//
// i=2: nums[2]=3, leftSum=8
//      rightSum = 28 - 8 - 3 = 17
//      8 !== 17 → continue
//      leftSum = 8 + 3 = 11
//
// i=3: nums[3]=6, leftSum=11
//      rightSum = 28 - 11 - 6 = 11
//      11 === 11 ✅ → return 3


// ============================================
// TEST CASES
// ============================================
// pivotIndex([1,7,3,6,5,6]) → 3
// pivotIndex([1,2,3]) → -1 (no equilibrium)
// pivotIndex([2,1,-1]) → 0 (left of index 0 is empty = 0)
 


// ============================================
// REAL-WORLD APPLICATION
// ============================================
// Same prefix sum logic used in my restaurant bill calculator:
// 
// #303 in code:     prefix[i+1] = prefix[i] + nums[i]
// #724 in code:     rightSum = totalSum - leftSum - nums[i]
// All two use cumulative tracking to avoid nested loops.
