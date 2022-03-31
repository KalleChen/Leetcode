/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let closest = 1000,
    ans;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let dif = nums[left] + nums[right] + nums[left + 1] - target;
    if (Math.abs(dif) >= closest && dif > 0) right--;
    dif = nums[left] + nums[right] + nums[right - 1] - target;
    if (Math.abs(dif) >= closest && dif < 0) left++;
    let dir = undefined;
    let closestToClosest = 1000;
    let closestDif;
    for (let j = left + 1; j < right; j++) {
      dif = nums[left] + nums[j] + nums[right] - target;
      if (Math.abs(dif) <= closest) {
        ans = dif + target;
        closest = Math.abs(dif);
        if (dif > 0) {
          dir = false;
        } else if (dif < 0) {
          dir = true;
        } else {
          return target;
        }
      }
      closestToClosest = Math.abs(dif);
    }
    if (Math.abs(dif) <= closestToClosest) {
      closestToClosest = Math.abs(dif);
      closestDif = dif;
    }
    if (dir === undefined) {
      if (closestDif > 0) {
        dir = false;
      } else {
        dir = true;
      }
    }
    if (dir) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
// @lc code=end
