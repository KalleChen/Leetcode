/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
  let num: number = 1;
  if (s[0] === "0") return 0;
  if (s.length === 1) return 1;
  for (let current = 1; current < s.length; current++) {
    let currentVal: number = parseInt(s[current]);
    let prevVal: number = parseInt(s[current - 1]);
    if (currentVal === 0) num--;
    if (prevVal === 0) num--;
    if (prevVal === 1) num++;
    if (prevVal === 2 && currentVal < 7) num++;
  }
  return num;
}
// @lc code=end
