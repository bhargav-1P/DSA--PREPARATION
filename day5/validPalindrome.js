// ============================================
// PROBLEM: LeetCode #125 - Valid Palindrome
// LINK: https://leetcode.com/problems/valid-palindrome/
// DIFFICULTY: Easy
// PATTERN: Two Pointers (Palindrome Check)
// PATTERN CATEGORY: String - Two Pointers
// ============================================
// CONCEPT: Check if a string reads the same forward and backward,
// ignoring non-alphanumeric characters and case.
// ============================================
// APPROACH 1: Regex + Reverse String
// TIME: O(n) — one pass to clean, one to reverse
// SPACE: O(n) — extra string created
// ============================================
// APPROACH 2: Two Pointers (Optimal)
// TIME: O(n) — single pass with two pointers
// SPACE: O(1) — no extra data structure
// ============================================

// ============================================
// APPROACH 1: Regex + Reverse String
// ============================================

var isPalindrome = function(s) {
    // Remove all non-alphanumeric characters
    let clean = s.replace(/[^A-Za-z0-9]/g, '');
    
    // Convert to lowercase
    clean = clean.toLowerCase();
    
    // Reverse the cleaned string
    let reversed = clean.split('').reverse().join('');
    
    // Compare original and reversed
    return clean === reversed;
};

// ============================================
// TEST CASES:
// Input: "A man, a plan, a canal: Panama"
// Output: true
// 
// Input: "race a car"
// Output: false
// 
// Input: " "
// Output: true
// ============================================


// ============================================
// APPROACH 2: Two Pointers (Optimal)
// ============================================

var isPalindrome = function(s) {
    // Left pointer starts at beginning
    let left = 0;
    
    // Right pointer starts at end
    let right = s.length - 1;
    
    // Continue until pointers cross
    while (left < right) {
        
        // Skip non-alphanumeric characters from left
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from right
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        
        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;  // Mismatch found
        }
        
        // Move pointers inward
        left++;
        right--;
    }
    
    return true;  // All characters matched
};

// ============================================
// HELPER FUNCTION: Check if character is alphanumeric
// ============================================

function isAlphaNumeric(ch) {
    return (
        (ch >= 'a' && ch <= 'z') ||  // lowercase letter
        (ch >= 'A' && ch <= 'Z') ||  // uppercase letter
        (ch >= '0' && ch <= '9')     // digit
    );
}

// ============================================
// TEST CASES:
// Input: "A man, a plan, a canal: Panama"
// Output: true
// 
// Input: "race a car"
// Output: false
// 
// Input: " "
// Output: true
// ============================================

// ============================================
// PATTERN NOTES:
// Two Pointers pattern works when:
// - You need to compare elements from both ends
// - You can skip invalid/unwanted elements
// - You need O(1) space complexity
// 
// KEY INSIGHT: 
// Start from both ends, skip junk, compare valid chars.
// If anything doesn't match, return false immediately.
// ============================================

// ============================================
// DAY 5 | LEARNED VIA: Story method + Section-by-section
// GAP TEST: Scheduled Day 6 and Day 10
// ============================================