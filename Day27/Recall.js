// ============================================
// DAY 27 — Retrieval: Palindrome Linked List (#234)
// Retrieval: Merge Two Sorted Lists (#21)
// Retrieval: Squares of a Sorted Array (#977)
// ============================================
// PATTERN: Fast/Slow + Reverse + Compare
// TIME: O(n) | SPACE: O(1)
// ============================================

var isPalindrome = function(head) {
    // Step 1: Find middle using fast & slow
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let prev = null;
    let curr = slow;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Step 3: Compare both halves
    let left = head;
    let right = prev;
    while (right !== null) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
};

// ============================================
// Retrieval: Merge Two Sorted Lists (#21)
// ============================================
// PATTERN: Dummy Node + Two Pointer Merge
// TIME: O(n+m) | SPACE: O(1)
// ============================================

var mergeTwoLists = function(list1, list2) {
    let dummy = { val: 0, next: null };
    let curr = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    curr.next = list1 !== null ? list1 : list2;

    return dummy.next;
};

// ============================================
// DAY 27 — Retrieval: Squares of a Sorted Array (#977)
// ============================================
// PATTERN: Two Pointers (Ends to Center)
// TIME: O(n) | SPACE: O(n)
// ============================================

var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        let leftSq = nums[left] ** 2;
        let rightSq = nums[right] ** 2;

        if (leftSq > rightSq) {
            result[i] = leftSq;
            left++;
        } else {
            result[i] = rightSq;
            right--;
        }
    }

    return result;
};