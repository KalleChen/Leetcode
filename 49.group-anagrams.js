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
    const alphabet = "a" + i;
    const current = [];
    ans.forEach((as) => {
      const exist = as.filter((a) => a.includes(alphabet));
      const notExist = as.filter((a) => !a.includes(alphabet));
      console.log(as)
      console.log(alphabet, exist, notExist)
      if (exist.length !== 0) current.push(exist);
      if (notExist.length !== 0) current.push(notExist);
    });
    ans = current;
  }
  return ans;
};
// @lc code=end
