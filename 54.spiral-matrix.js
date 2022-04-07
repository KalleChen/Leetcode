/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let dir = 0,
    turn = 0,
    row = 0,
    col = 0;
  const ans = [],
    rowLength = matrix[0].length,
    colLength = matrix.length;
  while (ans.length < rowLength * colLength) {
    ans.push(matrix[row][col]);
    if (dir === 0) {
      col++;
      if (col > rowLength - 1 - turn) {
        dir++;
        col--;
      }
    }
    if (dir === 1) {
      row++;
      if (row > colLength - 1 - turn) {
        dir++;
        row--;
      }
    }
    if (dir === 2) {
      col--;
      if (col < 0 + turn) {
        col++;
        dir++;
        turn++;
      }
    }
    if (dir === 3) {
      row--;
      if (row < 0 + turn) {
        row++;
        col++;
        dir = 0;
      }
    }
  }
  return ans;
};
// @lc code=end
