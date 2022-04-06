/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const ans = [];
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (!ans[j]) ans[j] = [];
      ans[j] = [matrix[i][j], ...ans[j]];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = ans[i][j];
    }
  }
  return ans;
};
// @lc code=end
