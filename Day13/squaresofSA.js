// ============================================
// DAY 14 — July 07, 2026 | DSA
// ============================================
// COMPLETED:
// ✅ Remove Duplicates (#26) — Retrieval from blank (zero peeks)
// ✅ First Bad Version (#278) — Retrieval from blank (zero peeks)
// ✅ Squares of a Sorted Array (#977) — New problem coded from story
// ============================================


// ============================================
// RETRIEVAL 1: Remove Duplicates (#26)
// ============================================
// Pattern: Two Pointers (Read & Write Head)
// Story: Write pointer stays at last unique element.
// Read pointer scans ahead. When new value found,
// advance write pointer and overwrite.
// Time: O(n) | Space: O(1)
// Status: Solved from blank, zero peeks ✅

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

// Test: [1,1,2] → 2
//       [0,0,1,1,1,2,2,3,3,4] → 5


// ============================================
// RETRIEVAL 2: First Bad Version (#278)
// ============================================
// Pattern: Binary Search (Closing Room)
// Story: Two walls low and high. While low < high,
// check mid. If mid is bad, high = mid (answer could be mid).
// If mid is good, low = mid + 1 (answer is to the right).
// When low and high meet, that's the first bad version.
// Time: O(log n) | Space: O(1)
// Status: Solved from blank, zero peeks ✅

var solution = function(isBadVersion) {
    return function(n) {
        let low = 1;
        let high = n;
        
        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);
            
            if (isBadVersion(mid)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        
        return low;
    };
};

// Test: n=5, bad=4 → 4
//       n=1, bad=1 → 1


// ============================================
// NEW PROBLEM: Squares of a Sorted Array (#977)
// ============================================
// Pattern: Two Pointers (Ends to Center)
// Story: "Two Giants"
// Two giants stand at opposite ends of the sorted array.
// I compare their squared heights.
// The taller giant (larger square) goes to the last empty
// spot in my answer array.
// The used giant leaves, so I move that pointer inward.
// I repeat until no giants remain.
// Time: O(n) | Space: O(n)
// Status: Coded from story after hand-tracing ✅

var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    
    // Fill from the back — largest squares first
    for (let i = n - 1; i >= 0; i--) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;
        
        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;         // Left giant used, move forward
        } else {
            result[i] = rightSquare;
            right--;        // Right giant used, move backward
        }
    }
    
    return result;
};

// Test: [-4,-1,0,3,10] → [0,1,9,16,100]
//       [-7,-3,2,3,11] → [4,9,9,49,121]


// ============================================
// DAY 14 NOTES
// ============================================
// - Two retrievals solved with zero peeks — retrieval muscle is building.
// - Hand-traced #977 on paper before coding from the Two Giants story.
// - Fundamentals: built valid HTML page from memory (doctype, head, body,
//   meta viewport, heading, paragraph, image). Used DevTools for box model.
// ============================================