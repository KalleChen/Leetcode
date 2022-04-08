/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const getCombinations = (start, num) => {
    if (n - start + 1 < num) return [];
    const ans = [];
    if (num === 1) {
      for (let i = start; i <= n; i++) {
        ans.push([i]);
      }
    } else {
      for (let i = 1; i + start <= n; i++) {
        const coms = getCombinations(start + i, num - 1);
        coms.forEach((c) => {
          ans.push([start + i - 1, ...c]);
        });
      }
    }
    return ans;
  };
  return getCombinations(1, k);
};
// @lc code=end
