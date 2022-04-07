/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let db = {};
  const takeStep = (location) => {
    if (location.row === obstacleGrid.length) return 0;
    if (location.col === obstacleGrid[0].length) return 0;
    if (obstacleGrid[location.row][location.col] === 1) return 0;
    if (
      location.row === obstacleGrid.length - 1 &&
      location.col === obstacleGrid[0].length - 1
    )
      return 1;
    const key = `${location.row}${location.col}`;
    if (db[key]) return db[key];
    db[key] =
      takeStep({ row: location.row + 1, col: location.col }) +
      takeStep({ row: location.row, col: location.col + 1 });
    return db[key];
  };
  return takeStep({ row: 0, col: 0 });
};
// @lc code=end
