/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let usedChar = {};
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (usedChar?.[s[i]] !== undefined && usedChar[s[i]] !== null) {
      max = Math.max(max, i - start);
      i = usedChar[s[i]] + 1;
      start = i;
      usedChar = {
        [s[i]]: i,
      };
    }
    usedChar[s[i]] = i;
  }
  return Math.max(max, s.length - start);
};

