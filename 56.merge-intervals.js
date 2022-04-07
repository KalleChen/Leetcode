/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let min = intervals[0][0],
    max = intervals[0][1],
    ans = [];
  if (intervals.length === 1) return intervals;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= max) {
      max = Math.max(max, intervals[i][1]);
    } else {
      ans.push([min, max]);
      min = intervals[i][0];
      max = intervals[i][1];
    }
    if (i === intervals.length - 1) ans.push([min, max]);
  }
  return ans;
};
// @lc code=end
