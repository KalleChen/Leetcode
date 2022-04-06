/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const copy = [];
  for (i = 0; i < candidates.length; ) {
    copy.push(candidates[i]);
    const current = candidates[i];
    while (candidates[i] === current) i++;
  }
  candidates = copy.sort((a, b) => a - b);
  const findCom = (num, start) => {
    if (num === 1) {
      if (candidates.slice(start).includes(1))
        return [[1]];
      else return [];
    }
    const coms = [];
    for (let i = start; i < candidates.length; i++) {
      const value = num - candidates[i];
      if (value === 0) coms.push([candidates[i]]);
      if (value > 0) {
        const nextComs = findCom(value, i);
        nextComs.forEach((ele) => {
          const com = [candidates[i], ...ele];
          if (!coms.includes(com)) coms.push(com);
        });
      }
    }
    return coms;
  };
  return findCom(target, 0);
};
// @lc code=end
