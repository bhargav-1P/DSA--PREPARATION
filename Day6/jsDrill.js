// ============================================
// DAY 6 — JAVASCRIPT FOUNDATIONS
// Arrays, Objects, Move Zeroes Pattern Analysis
// ============================================

// ============================================
// ARRAYS — 10 Examples
// ============================================

// push, pop, unshift, includes, indexOf
// splice, slice, map, filter, reduce

let names = ['Bhargav', 'Amit', 'Sanya'];
names.push('Kiran');                    // Add to end
names.pop();                            // Remove from end
names.unshift('First');                 // Add to front
console.log(names.includes('Amit'));    // Check existence
console.log(names.indexOf('Sanya'));    // Find position

let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(n => n * 2);     // Transform
let odds = nums.filter(n => n % 2);     // Filter
let sum = nums.reduce((a, b) => a + b); // Reduce to single value

let arr = ['x', 'y', 'z'];
arr.splice(1, 1);                       // Remove 'y'
let part = nums.slice(0, 3);            // Extract portion

// ============================================
// OBJECTS — 10 Examples
// ============================================

let phone = { brand: 'Samsung', model: 'S24', price: 80000 };
console.log(phone.brand);               // Dot notation
console.log(phone['price']);            // Bracket notation
phone.color = 'black';                  // Add property
delete phone.price;                     // Delete property

for (let key in phone) {                // Loop
  console.log(key, phone[key]);
}

Object.keys(phone);                     // Get all keys
Object.values(phone);                   // Get all values
Object.entries(phone);                  // Get key-value pairs

let student = {                         // Nested object
  name: 'Bhargav',
  scores: { math: 90, english: 85 }
};
console.log(student.scores.math);

// ============================================
// LEETCODE #283 — MOVE ZEROES
// ============================================

// PROBLEM: Move all zeros to end while maintaining relative order of non-zeros.

// APPROACH 1 (Failed): Adjacent swap
// Issue: Zero moves only one position per pass. Too slow. Wrong order.

// APPROACH 2 (Failed): Sort descending
// Issue: Destroys original order of non-zero elements. Requirement: "maintain order".

// APPROACH 3 (Correct): Two Pointers — NonZeroIndex
// Pattern: One pointer tracks where next non-zero element should go.
// Loop through array. If non-zero found, swap with pointer position. Increment pointer.
// Time: O(n) | Space: O(1)

// Pseudocode:
// nonZeroIndex = 0
// for i = 0 to end:
//   if nums[i] != 0:
//     swap(nums[i], nums[nonZeroIndex])
//     nonZeroIndex++

// Implementation deferred to Day 7.

// ============================================
// DAY 6 SUMMARY
// ============================================
// Completed: Arrays drill, Objects drill, Move Zeroes pattern analysis
// Postponed: Loops, Functions, DOM drills (Day 7)
// LeetCode: Contains Duplicate retrieval ✅
// ============================================