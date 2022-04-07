/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const pow = (num, p) => {
    if (p <= 0) return 1;
    if (p === 1) return num;
    let c = 1;
    if (p % 2 === 1) {
      p--;
      c = num;
    }
    num = num * num;
    p = p / 2;
    const half = Math.floor(p / 2);
    if (Math.abs(num) < 0.00001) return 0;
    return c * pow(num, half) * pow(num, p - half);
  };
  if (n < 0) return 1 / pow(x, n * -1);
  else return pow(x, n);
};
// @lc code=end
