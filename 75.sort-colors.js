/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const sort = (arr) => {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const arr1 = sort(arr.slice(0, mid));
    const arr2 = sort(arr.slice(mid, arr.length));
    const merged = [];
    while (arr1.length !== 0 || arr2.length !== 0) {
      if (arr1[0] && arr2[0]) {
        if (arr1[0] < arr2[0]) merged.push(arr1.shift());
        else merged.push(arr2.shift());
      } else if (arr1[0]) merged.push(arr1.shift());
      else merged.push(arr2.shift());
    }
    console.log(arr1, arr2, merged);
    return merged;
  };
  sort(nums).forEach((v, i) => (nums[i] = v));
  return;
};
// @lc code=end
