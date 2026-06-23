##  Daily Progress Log

### Day 1 (21-06-2026)
*  **Two Sum (#1)** - Brute Force $O(n^2)$ | Pattern: Nested Loops
*  **Best Time to Buy/Sell Stock (#121)** - Brute Force $O(n^2)$ | Pattern: Max Difference with Order
*  **Notes:** Struggled with translating ideas directly to code syntax. Learned to use the Discussion tab to study structural patterns.

### Day 2 (22-06-2026)
* **Contains Duplicate (#217)** - Optimal $O(n)$ | Pattern: Hash Set (Track seen elements)
* **Notes:** Successfully mapped out the full logic independently before coding. Encountered minor syntax hurdles (Set initialization, tracking `nums[i]` vs. index `i`, and return statement placement) but correctly identified the optimal time and space tradeoffs over brute force $O(n^2)$ and sorting $O(n \log n)$ approaches.

### Day 3 (23-06-2026)
*  **Best Time to Buy/Sell Stock (#121)** - **OPTIMAL** $O(n)$ Time | $O(1)$ Space | Pattern: Single Pass / Greedy
*  **Notes:** * *The Struggle:* Encountered runtime errors by initializing variables incorrectly (`minbuy = 0` trapped the comparison logic) and using invalid global syntax (`min()` instead of `Math.min()`).
  * *The Fix:* Initialized `minbuy` directly to `prices[0]` and used native `Math.min()` / `Math.max()` to dynamically slide through the array in a single linear pass. Saved $O(n^2)$ nested loop overhead.

---

##  Problem Count Dashboard
* **Total Solved:** 2 Unique Problems (1 Optimized successfully)
* **Easy:** 2 | **Medium:** 0 | **Hard:** 0
* **Patterns Identified:** 2