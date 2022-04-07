/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const total = (m - 1) + (n - 1);
  const min = Math.min(m - 1, n - 1);
  let top = 1;
  for (let i = total; i > total - min; i--) {
    top *= i;
  }
  let bottom = 1;
  for (let i = min; i > 0; i--) {
    bottom *= i;
  }
  return top / bottom;
};
// @lc code=end
