/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const stack = [0];
  while (stack.length !== 0) {
    const index = stack.pop();
    if (index + nums[index] >= nums.length - 1) return true;
    let max = 0,
      next = null;
    for (let i = 1; i <= nums[index]; i++) {
      if (i + nums[index + i] > max) {
        max = i + nums[index + i];
        next = index + i;
      }
    }
    if (next) stack.push(next);
  }
  return false;
};
// @lc code=end
