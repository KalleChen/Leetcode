/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  let min = intervals[0][0],
    max = intervals[0][1],
    ans = [],
    usedNew = false;
  if (intervals.length === 1) {
    if (newInterval[0] <= max && newInterval[1] >= min) {
      return [[Math.min(min, newInterval[0]), Math.max(max, newInterval[1])]];
    }
    return [intervals[0], newInterval].sort((a, b) => a[0] - b[0]);
  }
  for (let i = 1; i < intervals.length; i++) {
    if (!usedNew && newInterval[0] <= max) {
      if (newInterval[1] >= min) {
        min = Math.min(min, newInterval[0]);
        max = Math.max(max, newInterval[1]);
      } else {
        ans.push(newInterval);
      }
      usedNew = true;
    }
    if (usedNew && intervals[i][0] <= max) {
      max = Math.max(max, intervals[i][1]);
    } else {
      ans.push([min, max]);
      min = intervals[i][0];
      max = intervals[i][1];
    }
    if (i === intervals.length - 1) {
      if (!usedNew) {
        if (newInterval[0] <= max && newInterval[1] >= min) {
          ans.push([
            Math.min(min, newInterval[0]),
            Math.max(max, newInterval[1]),
          ]);
        }else {
            ans = [...ans, ...[[min,max], newInterval].sort((a,b)=>a[0]-[0])]
        }
      } else {
        ans.push([min, max]);
      }
    }
  }
  return ans;
};
// @lc code=end
