/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const combinations = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let ans = [];
  for (let i of digits) {
    if (ans.length === 0) {
      ans = combinations[i];
    } else {
      let current = [];
      ans.forEach((a) => {
        combinations[i].forEach((c) => {
          current.push(a + c);
        });
      });
      ans = [...current];
    }
  }
  return ans;
};
// @lc code=end
