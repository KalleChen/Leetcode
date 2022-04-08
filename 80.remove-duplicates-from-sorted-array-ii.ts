/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let current: number = nums[0],
    num: number = 1;
  for (let i: number = 1; i < nums.length; i++) {
    if (current === nums[i]) num++;
    if (current !== nums[i]) {
      num = 1;
      current = nums[i];
    }
    if (num > 2) {
      while (nums[i] === current) nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
// @lc code=end
