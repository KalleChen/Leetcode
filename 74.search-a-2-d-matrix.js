/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let min = 0,
    max = matrix.length - 1;
  while (min !== max - 1 && min < max) {
    const mid = Math.floor((min + max) / 2);
    if (target > matrix[mid][0]) min = mid;
    else if (target < matrix[mid][0]) max = mid;
    else return true;
  }
  let row = min;
  if (target >= matrix[max][0]) row = max;
  min = 0;
  max = matrix[0].length;
  console.log(row);
  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    if (target === matrix[row][min]) return true;
    if (target === matrix[row][max]) return true;
    if (target > matrix[row][mid]) min = mid + 1;
    else if (target < matrix[row][mid]) max = mid - 1;
    else return true;
  }
  return false;
};
// @lc code=end
