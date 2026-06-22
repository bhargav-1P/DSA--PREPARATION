/*
  Problem: Contains Duplicate (#217)
  Date: Day 2 — June 22, 2026

  My Approach:
  First I read the problem and thought: if I loop through the array
  and keep a separate list of what I've seen, I can check each element
  before adding it. If it's already there, return true. If the loop
  finishes with no match, return false. I came up with this logic fully
  on my own before writing any code.

  Where I got stuck:
  I wrote `let set = ()` instead of `new Set()` and I kept checking
  `i` (the index) instead of `nums[i]` (the actual value). I also put
  `return false` inside the loop instead of after it. Three syntax
  mistakes, zero logic mistakes.

  Pattern: Hash Set — track seen elements for O(1) lookup
  Time Complexity: O(n) — one pass through the array
  Space Complexity: O(n) — Set grows with input size

  Brute force exists (two nested loops, O(n²)) but Set approach
  is optimal. Also a sorting approach exists: sort first, then
  check adjacent elements — O(n log n).
*/

var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true
        } else {
            set.add(nums[i])
        }
    }
    return false
};



