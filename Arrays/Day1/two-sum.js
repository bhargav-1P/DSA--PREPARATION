
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
 ============================================

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
/* Visual trick to remember  imagine a detective
 Every time he sees a number->
 currentNumber-->what partner do i need?.-->check notebook-->found?yes-Return //if no-write current number
 */   

const nums=[2,7,11,15];
const target=9;
function twoSum(nums,target){
    //Notebook: Number-Index
const map={};
// loop through given array
for(i=0;i<nums.length;i++){
    //calculate what number is needed
    //ex: target=9,current=2 need =7
    let need=target-nums[i];
    //have i already seen the needed number?if yes answer found
    if (map[need]!==undefined){
    //map[need]= old index
    //i=current index
        return [map[need],i];
    }
    //not found store current number and its index
    //ex: map[2]=0,map[7]=1
    map[nums[i]]=i;
}return [];
}
console.log(twoSum(nums,target));
/*Quick summary: current number
 ->need=target-current->
 need already seen?->
 yes->return indicies
 no: store current number */

