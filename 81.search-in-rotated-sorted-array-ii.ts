/*
 * @lc app=leetcode id=81 lang=typescript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
  if (nums.length === 1) {
    return nums[0] === target;
  }
  let min: number = 0,
    max: number = nums.length - 1;
  while (min < max) {
    const currentMin: number = nums[min];
    while (nums[min] === currentMin) min++;
    min--;
    const currentMax: number = nums[max];
    while (nums[max] === currentMax) max--;
    max++;
    if (nums[min] === nums[max]) max--;
    const mid: number = Math.floor((min + max) / 2);
    if (nums[mid] === target) return true;
    if (nums[min] === target) return true;
    if (nums[max] === target) return true;
    if (target < nums[mid]) {
      if (target > nums[min] || nums[min] >= nums[mid]) max = mid - 1;
      else min = mid + 1;
    }
    if (target > nums[mid]) {
      if (target < nums[max] || nums[max] <= nums[mid]) min = mid + 1;
      else max = mid - 1;
    }
  }
  return false;
}
// @lc code=end
