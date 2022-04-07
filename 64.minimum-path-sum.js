/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const db = {};
  const nextStep = (row, col) => {
    if (row > grid.length - 1) return 99999999;
    if (col > grid[0].length - 1) return 99999999;
    if (row === grid.length - 1 && col === grid[0].length - 1)
      return grid[row][col];
    const key = `${row}-${col}`;
    if (db[key]) return db[key];
    db[key] =
      grid[row][col] + Math.min(nextStep(row + 1, col), nextStep(row, col + 1));
    return db[key];
  };
  return nextStep(0, 0);
};
// @lc code=end
