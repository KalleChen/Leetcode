/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let ans = [];
  let neg = 1;
  let readDigited = false;
  for (let char of s) {
    if (char < "0" || char > "9") {
      if (char === " " || char === "+" || char === "-") {
        if (readDigited) break;
      } else {
        break;
      }
    }
    if ((char === "-" || char === "+") && !readDigited) {
      neg = char === "-" ? -1 : 1;
      readDigited = true;
    }
    if (char > "0" && char <= "9") {
      if (!readDigited) {
        readDigited = true;
      }
      ans.push(char);
    }
    if (char === "0") {
      if (!readDigited) {
        readDigited = true;
      }
      if (ans.length !== 0) {
        ans.push(char);
      }
    }
  }
  if (ans.length > 10) {
    return neg === -1 ? Math.pow(2, 31) * -1 : Math.pow(2, 31) - 1;
  }
  ans = ans.length === 0 ? 0 : parseInt(ans.join("") * neg);
  if (ans > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (ans < Math.pow(2, 31) * -1) return Math.pow(2, 31) * -1;
  return ans;
};

