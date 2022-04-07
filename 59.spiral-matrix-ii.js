/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(new Array(n));
  }
  let dir = 0,
    turn = 0,
    row = 0,
    col = 0,
    step = 1;
  while (step <= n * n) {
    ans[row][col] = step;
    step++;
    if (dir === 0) {
      col++;
      if (col > n - 1 - turn) {
        col--;
        row++;
        dir++;
      }
    } else if (dir === 1) {
      row++;
      if (row > n - 1 - turn) {
        row--;
        col--;
        dir++;
      }
    } else if (dir === 2) {
      col--;
      if (col < 0 + turn) {
        col++;
        row--;
        dir++;
        turn++;
      }
    } else if (dir === 3) {
      row--;
      if (row < 0 + turn) {
        row++;
        col++;
        dir = 0;
      }
    }
  }
  return ans
};
// @lc code=end
