/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const findComs = (num, start) => {
    const coms = [];
    for (let i = start; i < candidates.length; ) {
      const value = num - candidates[i];
      if (value === 0) coms.push([candidates[i]]);
      else if (value >= candidates[i]) {
        const nextComs = findComs(value, i + 1);
        nextComs.forEach((ele) => {
          coms.push([candidates[i], ...ele]);
        });
      }
      const current = candidates[i];
      while (candidates[i] === current) i++;
    }
    return coms;
  };
  return findComs(target, 0)
};
// @lc code=end
