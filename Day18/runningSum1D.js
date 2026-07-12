// ============================================================
// PROBLEM: #1480 - Running Sum of 1d Array
// DATE: Day 18
// PATTERN: Prefix Sum
// TIME: O(n) | SPACE: O(1) optimized
// SOLVED: Without peeking. Paper trace first. Own hands.
// ============================================================


var runningSumBrute = function(nums) {
    let currentSum = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];      // add current element to running total
        result.push(currentSum);    // store running total in result
    }

    return result;
};

// ─────────────────────────────────────────────
// OPTIMAL — O(n) TIME | O(1) SPACE
// ─────────────────────────────────────────────
//
// Same logic. One change only: no separate result array.
// Modify nums in place — store currentSum back at nums[i].
// Saves O(n) extra space.
// Returns the modified nums array directly.
//
// KEY INSIGHT I found myself:
// currentSum already holds the running total at every step.
// nums[i] = currentSum stores it back in place.
// No extra array needed at all.

var runningSum = function(nums) {
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];      // accumulate running total
        nums[i] = currentSum;       // store back in place — no extra array
    }

    return nums;
};

// ─────────────────────────────────────────────
// TEST CASES — written by me, not copied
// ─────────────────────────────────────────────

console.log("--- Brute Force ---");
console.log(runningSumBrute([1,2,3,4]));      // [1,3,6,10]
console.log(runningSumBrute([1,1,1,1,1]));    // [1,2,3,4,5]
console.log(runningSumBrute([3]));             // [3]

console.log("--- Optimal ---");
console.log(runningSum([1,2,3,4]));            // [1,3,6,10]
console.log(runningSum([1,1,1,1,1]));          // [1,2,3,4,5]
console.log(runningSum([3]));                  // [3]

// ─────────────────────────────────────────────
// COMPLEXITY COMPARISON
// ─────────────────────────────────────────────
//
// Brute Force:  TIME O(n) | SPACE O(n) — extra result array
// Optimal:      TIME O(n) | SPACE O(1) — modified input in place
//
// Time is same. Space is the win.
// result array of size n → gone.
// One variable currentSum → all we need.

// ─────────────────────────────────────────────
// CONNECTION TO #303 PREFIX SUM
// ─────────────────────────────────────────────
//
// #303 constructor:    prefix[i+1] = prefix[i] + nums[i]
// #1480 optimal:       currentSum += nums[i] → nums[i] = currentSum
//
// Same accumulation. Different shape.
// #1480 is the clearest version of Prefix Sum that exists.
// If asked "explain Prefix Sum" in an interview:
// → trace #1480 on paper. Done.

// ─────────────────────────────────────────────
// WHAT TODAY PROVED
// ─────────────────────────────────────────────
//
// Paper trace first → code worked first attempt.