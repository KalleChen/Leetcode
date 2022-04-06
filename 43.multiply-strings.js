/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const multiple = (a, b) => {
    b = b - "0";
    let c = 0;
    let ans = "";
    for (let i = a.length - 1; i >= 0; i--) {
      let value = a[i] - "0";
      value = value * b + c;
      ans = `${value % 10}${ans}`;
      c = Math.floor(value / 10);
    }
    if (c !== 0) ans = `${c}${ans}`;
    return ans;
  };
  const add = (a, b) => {
    if (a.length > b.length) {
      let i = a.length - b.length;
      while (i > 0) {
        b = `0${b}`;
        i--;
      }
    } else {
      let i = b.length - a.length;
      while (i > 0) {
        a = `0${a}`;
        i--;
      }
    }
    let ans = "",
      c = 0;
    for (let i = a.length - 1; i >= 0; i--) {
      const value = a[i] - "0" + (b[i] - "0") + c;
      ans = `${value % 10}${ans}`;
      c = Math.floor(value / 10);
    }
    if (c !== 0) ans = `${c}${ans}`;
    return ans;
  };
  let ans = "";
  for (let i = num2.length - 1; i >= 0; i--) {
    let mul = multiple(num1, num2[i]);
    for (let j = 0; j < num2.length - 1 - i; j++) {
      mul = `${mul}0`;
    }
    ans = add(ans, mul);
  }
  while (ans[0] === "0" && ans.length > 1) {
    ans = ans.slice(1);
  }
  return ans;
};
// @lc code=end
