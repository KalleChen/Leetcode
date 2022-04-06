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
  let step = 0,
    index = 0;
  while (index + nums[index] < nums.length - 1) {
    let max = 0,
      select;
    for (let i = 1; i <= nums[index]; i++) {
      if (i + nums[index + i] > max) {
        max = i + nums[index + i];
        select = i;
      }
    }
    step++;
    index += select;
  }
  return step + 1;
};
// @lc code=end
