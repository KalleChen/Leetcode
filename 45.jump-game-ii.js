/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  const db = {};
  const jumpNext = (index) => {
    if (db[index]) return db[index];
    if (index + nums[index] >= nums.length - 1) {
      db[index] = 1;
      return 1;
    }
    let min = 999999;
    for (let i = 1; i <= nums[index]; i++) {
      const step = jumpNext(index + i);
      if (step < min) min = step;
    }
    db[index] = 1 + min;
    return 1 + min;
  };
  return jumpNext(0);
};
// @lc code=end
