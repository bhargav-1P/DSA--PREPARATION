// ============================================
// DAY 15 — July 09, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ Maximum Vowels in a Substring (#1456) — New Problem (Sliding Window)
// ✅ Contains Duplicate (#217) — Spaced Retrieval (zero peeks)
// ✅ Maximum Average Subarray I (#643) — Spaced Retrieval (fixed sum/max order bug)
// ============================================


// ============================================
// NEW PROBLEM: Maximum Vowels in a Substring (#1456)
// ============================================
// LINK: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// PATTERN: Sliding Window Fixed Size
// STORY: "A train window of size k slides across a string.
//         At each step: if the letter that left was a vowel,
//         decrease the count. If the letter that entered is a vowel,
//         increase the count. Track the maximum count.
//         This avoids recounting the whole window every time."
// TIME: O(n) — single pass after first window
// SPACE: O(1) — only a few variables

// ============================================
// APPROACH 1: Sliding Window (Optimal)
// ============================================

var maxVowels = function(s, k) {
    // Step 1: Count vowels in the first window (positions 0 to k-1)
    // This is our baseline — the anchor window
    let count = 0;
    for (let i = 0; i < k; i++) {
        // isVowel is a helper function defined below
        // It returns true if the character is a, e, i, o, or u
        if (isVowel(s[i])) {
            count++;  // Found a vowel, increase count
        }
    }
    
    // Step 2: Initialize max with the first window's count
    // NEVER use 0 here — if the string has no vowels, max will be 0,
    // which is correct. But if we used 0 and there were vowels,
    // we'd overwrite it anyway. Starting with real data is safer.
    let max = count;
    
    // Step 3: Slide the window across the rest of the string
    // i starts at k (the first character AFTER the initial window)
    // i goes up to s.length - 1 (the last character)
    for (let i = k; i < s.length; i++) {
        
        // === THE LEAVING LETTER ===
        // s[i - k] is the character that JUST LEFT the window
        // i is the new position, k is the window size
        // So i - k is the start of the PREVIOUS window
        // Example: s = "abciiidef", k = 3, i = 3
        //   i - k = 0 → 'a' is leaving
        // If 'a' is a vowel, we subtract 1 from count
        if (isVowel(s[i - k])) {
            count--;  // Vowel left the window, decrease count
        }
        
        // === THE ENTERING LETTER ===
        // s[i] is the character that JUST ENTERED the window
        // This is the new character at the right edge
        // Example: s = "abciiidef", k = 3, i = 3
        //   s[3] = 'i' is entering
        // If 'i' is a vowel, we add 1 to count
        if (isVowel(s[i])) {
            count++;  // Vowel entered the window, increase count
        }
        
        // Step 4: Update max if this window has more vowels
        // Math.max would work here too: max = Math.max(max, count)
        if (count > max) {
            max = count;
        }
    }
    
    // Return the maximum vowel count found in any window
    return max;
};

// Helper function: checks if a character is a vowel
// Uses .includes() on a string of all vowels
// Returns true for 'a', 'e', 'i', 'o', 'u'
// Returns false for everything else
function isVowel(c) {
    return 'aeiou'.includes(c);
}

// ============================================
// TRACE EXAMPLE (for understanding)
// ============================================
// s = "abciiidef", k = 3
//
// First window (indices 0,1,2): "abc"
//   a is vowel → count = 1
//   b is not
//   c is not
//   After first window: count = 1, max = 1
//
// Slide 1 (i=3):
//   Leaving: s[3-3] = s[0] = 'a' → vowel → count-- → count = 0
//   Entering: s[3] = 'i' → vowel → count++ → count = 1
//   max stays 1
//
// Slide 2 (i=4):
//   Leaving: s[4-3] = s[1] = 'b' → not vowel → count stays 1
//   Entering: s[4] = 'i' → vowel → count++ → count = 2
//   max = 2
//
// Slide 3 (i=5):
//   Leaving: s[5-3] = s[2] = 'c' → not vowel → count stays 2
//   Entering: s[5] = 'i' → vowel → count++ → count = 3
//   max = 3
//
// Slide 4 (i=6):
//   Leaving: s[6-3] = s[3] = 'i' → vowel → count-- → count = 2
//   Entering: s[6] = 'd' → not vowel → count stays 2
//   max stays 3
//
// Slide 5 (i=7):
//   Leaving: s[7-3] = s[4] = 'i' → vowel → count-- → count = 1
//   Entering: s[7] = 'e' → vowel → count++ → count = 2
//   max stays 3
//
// Slide 6 (i=8):
//   Leaving: s[8-3] = s[5] = 'i' → vowel → count-- → count = 1
//   Entering: s[8] = 'f' → not vowel → count stays 1
//   max stays 3
//
// Final answer: 3

// ============================================
// TEST CASES
// ============================================
// maxVowels("abciiidef", 3) → 3   (window "iii" has 3 vowels)
// maxVowels("aeiou", 2) → 2       (any window of size 2 has 2 vowels)
// maxVowels("xyz", 2) → 0         (no vowels at all)
// maxVowels("leetcode", 3) → 2    (window "eet" has 2 vowels)


// ============================================
// RETRIEVAL 1: Contains Duplicate (#217)
// ============================================
// LINK: https://leetcode.com/problems/contains-duplicate/
// PATTERN: Hash Set (Membership Check)
// STORY: "Put each element into a Set. If an element is already
//         in the Set, we found a duplicate → return true.
//         If we finish the loop, no duplicates → return false."
// TIME: O(n) — single pass through the array
// SPACE: O(n) — Set stores up to n elements
// STATUS: Day 15 retrieval — zero peeks ✅

var containsDuplicate = function(nums) {
    // Create an empty Set to track numbers we've seen
    let seen = new Set();

    // Loop through every number in the array
    for (let i = 0; i < nums.length; i++) {
        // If this number is already in the Set, it's a duplicate
        if (seen.has(nums[i])) {
            return true;  // Found duplicate, exit immediately
        }
        // Otherwise, add it to the Set for future checks
        seen.add(nums[i]);
    }

    // If we made it through the entire array, no duplicates exist
    return false;
};


// ============================================
// RETRIEVAL 2: Maximum Average Subarray I (#643)
// ============================================
// LINK: https://leetcode.com/problems/maximum-average-subarray-i/
// PATTERN: Sliding Window Fixed Size
// STORY: "Slide a fixed window across the array. At each step,
//         subtract the element that left, add the element that
//         entered. Track the maximum sum. Return max/k."
// TIME: O(n) — single pass after first window
// SPACE: O(1) — only a few variables
// STATUS: Day 15 retrieval — fixed sum/max order bug ✅
//
// BUG I FIXED DURING RETRIEVAL:
//   I originally wrote maxSum update BEFORE windowSum update.
//   This compared maxSum against the OLD window sum, not the new one.
//   Correct order: update windowSum FIRST, THEN compare with maxSum.
//   RULE: windowSum = windowSum - nums[i - k] + nums[i];  ← update first
//         maxSum = Math.max(maxSum, windowSum);            ← then compare

var findMaxAverage = function(nums, k) {
    // Step 1: Calculate sum of the first window (positions 0 to k-1)
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    // Step 2: Initialize maxSum with the first window's actual sum
    // NEVER use 0 — negative arrays would give wrong answer
    let maxSum = windowSum;
    
    // Step 3: Slide the window across the rest of the array
    for (let i = k; i < nums.length; i++) {
        // THE SLIDE: subtract leaving element, add entering element
        // nums[i - k] = element EXITING the window
        // nums[i]     = element ENTERING the window
        windowSum = windowSum - nums[i - k] + nums[i];
        
        // Update max if this window has a larger sum
        // ORDER MATTERS: windowSum must be updated first (line above)
        // before we compare with maxSum
        maxSum = Math.max(maxSum, windowSum);
    }
    
    // Step 4: Return the maximum average
    return maxSum / k;
};


// ============================================
// DAY 15 NOTES
// ============================================
// - Applied Sliding Window to a string problem for the first time.
//   The logic is identical to #643 — only the condition changes
//   (vowel check instead of addition).
// - Spaced retrieval of #217 was smooth — Set pattern is now solid.
// - Retrieval of #643 revealed the sum/max order bug.
//   Drilled the correct order 10 times in the console.