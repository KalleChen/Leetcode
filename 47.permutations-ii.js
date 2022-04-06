/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const permuteNext = (remains) => {
    if (remains.length === 1) return [remains];
    const ans = [];
    const used = {};
    for (let i = 0; i < remains.length; ) {
      const nextPermute = permuteNext(
        remains.slice(0, i).concat(remains.slice(i + 1, remains.length))
      );
      nextPermute.forEach((n) => {
        ans.push([remains[i], ...n]);
      });
      used[remains[i]] = true;
      while (used[remains[i]] && i < remains.length) i++;
    }
    return ans;
  };
  return permuteNext(nums);
};
// @lc code=end
