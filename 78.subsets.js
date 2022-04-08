/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const getSubsets = (start, len) => {
    if (nums.length - start < len) return [];
    if (len === 0) return [[]];
    const ans = [];
    if (len === 1) {
      ans.push([nums[start]]);
    } else {
      for (let i = start + 1; i < nums.length; i++) {
        const subsets = getSubsets(i, len - 1);
        subsets.forEach((s) => {
          ans.push([nums[start], ...s]);
        });
      }
    }
    return ans;
  };
  let ans = [[]];
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      ans = [...ans, ...getSubsets(j, i)];
    }
  }
  return ans;
};
// @lc code=end
