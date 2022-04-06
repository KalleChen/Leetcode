/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let ans = [strs];
  for (i = 0; i < 26; i++) {
    const alphabet = String.fromCharCode("a".charCodeAt(0) + i);
    const current = [];
    ans.forEach((as) => {
      const diffLen = {};
      as.forEach((a) => {
        const len = a.split(alphabet).length - 1;
        diffLen[len] = [...(diffLen?.[len] || []), a];
      });
      Object.keys(diffLen).forEach((k) => {
        current.push(diffLen[k]);
      });
    });
    ans = current;
  }
  return ans;
};
// @lc code=end
