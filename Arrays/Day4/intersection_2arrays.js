/*# LeetCode 349 - Intersection of Two Arrays

## Brute Force

### Idea

Compare every element of `nums1` with every element of `nums2`. If a match is found, add it to the result only if it's not already present.

*/
var intersection = function(nums1, nums2) {

    let result = [];

    for(let i = 0; i < nums1.length; i++) {

        for(let j = 0; j < nums2.length; j++) {

            if(nums1[i] === nums2[j]) {

                if(!result.includes(nums1[i])) {
                    result.push(nums1[i]);
                }

                break;
            }
        }
    }

    return result;
};
```

**Time Complexity:** O(n × m)

**Space Complexity:** O(k)

---

## Optimized (HashSet)

### Idea

Use Sets to remove duplicates and perform O(1) lookups.

```
var intersection = function(nums1, nums2) {

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let result = [];

    for(let num of set1) {

        if(set2.has(num)) {
            result.push(num);
        }
    }

    return result;
};
/*

**Time Complexity:** O(n + m)

**Space Complexity:** O(n + m)

---

## Key Learnings

* Don't `return` inside loops unless required.
* `push()` returns length, not the array.
* `Set` (capital S) is case-sensitive.
* Use HashSet when the problem involves:

  * Duplicates
  * Common elements
  * Fast lookups
  * Existence checks

