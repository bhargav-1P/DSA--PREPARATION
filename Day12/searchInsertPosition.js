// ============================================
// DAY 12 — July 06, 2026 | DSA
// LeetCode 35 - Search Insert Position
// ============================================
// Pattern: Binary Search (Variation)
// Time: O(log n) | Space: O(1)
// ============================================

// ============================================
// THE STORY
// ============================================
// I have a sorted array and a target number.
// I need to find where the target is, or where it should go.
//
// I put two walls: low at the start, high at the end.
// While the walls haven't crossed:
//   I check the middle element.
//   If it's the target → I found it, return the index.
//   If the target is bigger → it must be on the right. Move low wall forward.
//   If the target is smaller → it must be on the left. Move high wall backward.
//
// If the target is not in the array, the low wall ends up
// exactly where the target should be inserted.
// This works because low always points to the first element
// that is greater than or equal to the target.
// ============================================

// ============================================
// APPROACH 1: Brute Force (Linear Search)
// ============================================
// IDEA: Walk through the array. First element >= target is the answer.
// If none found, target goes at the end.
// TIME: O(n) | SPACE: O(1)

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

// ============================================
// APPROACH 2: Optimal (Binary Search)
// ============================================
// IDEA: Cut the search space in half each time.
// If target found → return mid.
// If target not found → low is the insertion position.
// TIME: O(log n) | SPACE: O(1)

var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        
        if (nums[mid] === target) {
            return mid;          // Found it
        } else if (nums[mid] < target) {
            low = mid + 1;       // Target is on the right
        } else {
            high = mid - 1;      // Target is on the left
        }
    }
    
    // low has crossed high. low is now the insertion point.
    return low;
};

// ============================================
// WHY RETURN LOW?
// ============================================
// When the while loop ends, low > high.
// At this point, low points to the first element
// that is greater than the target.
// That's exactly where the target should be inserted
// to keep the array sorted.

// ============================================
// DRY RUN
// ============================================
// Input: nums = [1, 3, 5, 6], target = 2
//
// Step 1: low=0, high=3, mid=1 → nums[1]=3 > 2 → high=0
// Step 2: low=0, high=0, mid=0 → nums[0]=1 < 2 → low=1
// Step 3: low=1, high=0 → loop ends (low > high)
// Return low = 1 ✅ (target should be inserted at index 1)

// ============================================
// TEST CASES
// ============================================
// Input: [1,3,5,6], target=5 → Output: 2 (found)
// Input: [1,3,5,6], target=2 → Output: 1 (insert)
// Input: [1,3,5,6], target=7 → Output: 4 (insert at end)
// Input: [1,3,5,6], target=0 → Output: 0 (insert at start)

// ============================================
// PATTERN KEYS
// ============================================
// TRIGGER: "Sorted array", "find target", "search in O(log n)"
// DIFFERENCE from #278: #278 uses while (low < high), #35 uses while (low <= high)
//   #278: low < high because we narrow down to a single answer
//   #35: low <= high because we might find the exact target at mid
// RETURN: low instead of -1 when not found


// ============================================
// RETRIEVALS (Day 12)
// ============================================

// #26 Remove Duplicates — Two Pointers (Read & Write) — RETRIEVAL
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

// #27 Remove Element — Two Pointers (Read & Write) — RETRIEVAL
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

// #278 First Bad Version — Binary Search — RETRIEVAL
var solution = function(isBadVersion) {
    return function(n) {
        let low = 1, high = n;
        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (isBadVersion(mid)) high = mid;
            else low = mid + 1;
        }
        return low;
    };
};


// ============================================
// DAY 12 REVISION NOTES
// ============================================

// TODAY'S DSA WORK:
// ✅ #26 Remove Duplicates — Retrieval (~7 min)
// ✅ #27 Remove Element — Retrieval (~6 min)
// ✅ #278 First Bad Version — Retrieval (~9 min)
// ✅ #35 Search Insert Position — New Problem

// METHOD EVOLUTION:
// Day 10: Visual learning + 3-Time Recall Drill → Binary Search locked
// Day 11: Two Giants story + Walkthrough → Two Pointers (Ends to Center) locked
// Day 12: Fundamentals + Verbalize + Syntax drilling → Bridge pattern to code

