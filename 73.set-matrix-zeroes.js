/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    let hasZero = false;
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        hasZero = true;
        matrix[0][col] = "a";
      }
    }
    if (hasZero) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[row][col] !== "a") matrix[row][col] = 0;
      }
    }
  }
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === "a") {
      for (let row = 0; row < matrix.length; row++) {
        matrix[row][col] = 0;
      }
    }
  }
  return;
};
// @lc code=end
