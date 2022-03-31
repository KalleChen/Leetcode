/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let ans = [];
  let left = 0,
    right = nums.length - 1;
  for (left = 0; left < nums.length; ) {
    right = nums.length - 1;
    if (right - 2 > left) {
      while (
        nums[left] + nums[right - 2] + nums[right - 1] + nums[right] < target &&
        left < right - 2
      )
        left++;
    }
    if (left + 2 < right) {
      while (
        nums[left] + nums[left + 1] + nums[left + 2] + nums[right] > target &&
        right > left + 2
      )
        right--;
    }
    while (left < right) {
      let left2 = left + 1,
        right2 = right - 1;
      while (left2 < right2) {
        const sum = nums[left] + nums[left2] + nums[right2] + nums[right];
        if (sum === target) {
          ans.push([nums[left], nums[left2], nums[right2], nums[right]]);
          const current = nums[left2];
          while (current === nums[left2] && left2 < right2) left2++;
        }
        if (sum > target) {
          const current = nums[right2];
          while (current === nums[right2] && right2 > left2) right2--;
        }
        if (sum < target) {
          const current = nums[left2];
          while (current === nums[left2] && left2 < right2) left2++;
        }
      }
      const current = nums[right];
      while (nums[right] === current && left < right) right--;
    }
    const current = nums[left];
    while (nums[left] === current && left < nums.length) left++;
  }
  return ans;
};
// @lc code=end
