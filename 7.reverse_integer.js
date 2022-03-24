/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let neg = x < 0 ? -1 : 1;
  let x_str = x.toString().split("").reverse().join("");
  let ans = parseInt(x_str) * neg;
  if (ans > Math.pow(2, 31) - 1 || ans < -1 * Math.pow(2, 31)) return 0;
  return ans;
};

