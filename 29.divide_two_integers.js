/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let neg = false;
  if (dividend < 0) {
    dividend = 0 - dividend;
    neg = !neg;
  }
  if (divisor < 0) {
    divisor = 0 - divisor;
    neg = !neg;
  }
  let ans = 0;
  while (dividend >= divisor) {
    let max = divisor;
    let i = 1;
    while (true) {
      const current = max;
      max += max;
      if (max > dividend) {
        max = current;
        break;
      }
      i += i;
    }
    dividend -= max;
    ans += i;
  }
  if (neg) ans = 0 - ans;
  if (ans > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (ans < 0 - Math.pow(2, 31)) return 0 - Math.pow(2, 31);
  return ans;
};
