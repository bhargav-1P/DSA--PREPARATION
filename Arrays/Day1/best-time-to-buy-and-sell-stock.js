// ============================================
// PROBLEM: LeetCode #121 - Best Time to Buy and Sell Stock
// LINK: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// DIFFICULTY: Easy
// PATTERN: Brute Force (Nested Loops)
// PATTERN CATEGORY: Array - Max Difference with Order
// ============================================
// CONCEPT: Buy on day i, sell on day j (j > i).
// Profit = prices[j] - prices[i]. Track maximum profit.
// ============================================
// TIME: O(n²) - nested loops through array
// SPACE: O(1) - no extra data structure used
// ============================================

var maxProfit = function(prices) {
    let maxProfit = 0;
    
    // Outer loop: buy day
    for (let i = 0; i < prices.length; i++) {
        // Inner loop: sell day (must be after buy day)
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    
    return maxProfit;
};

// ============================================
// TEST CASE:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy at 1 (day 2), sell at 6 (day 5). Profit = 6 - 1 = 5
// ============================================

// ============================================
// OPTIMIZED SOLUTION: To be added later
// Pattern: Single Pass / Greedy (Track min price so far)
// Time: O(n), Space: O(1)
// Will revisit in evening revision block
// ============================================