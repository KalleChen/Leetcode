/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permuteNext = (remains) => {
    if (remains.length === 1) return [remains];
    const ans = [];
    for (let i = 0; i < remains.length; i++) {
      const nextPermute = permuteNext(remains.filter((r) => r !== remains[i]));
      nextPermute.forEach((n) => {
        ans.push([remains[i], ...n]);
      });
    }
    return ans
  };
  return permuteNext(nums)
};
// @lc code=end
