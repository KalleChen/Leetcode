/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    let currentStr = `${s[i]}`;
    if (currentStr.length > maxStr.length) {
      maxStr = currentStr;
    }
    for (let j = 1; ; j++) {
      if (i - j < 0 || i + j === s.length) {
        break;
      }
      if (s[i - j] === s[i + j]) {
        currentStr = `${s[i - j]}${currentStr}${s[i + j]}`;
        if (currentStr.length > maxStr.length) {
          maxStr = currentStr;
        }
      } else {
        break;
      }
    }
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      currentStr = `${s[i] + s[i]}`;
      if (currentStr.length > maxStr.length) {
        maxStr = currentStr;
      }
      for (let j = 1; ; j++) {
        if (i - j < 0 || i + 1 + j === s.length) {
          break;
        }
        if (s[i - j] === s[i + 1 + j]) {
          currentStr = `${s[i - j]}${currentStr}${s[i + 1 + j]}`;
          if (currentStr.length > maxStr.length) {
            maxStr = currentStr;
          }
        } else {
          break;
        }
      }
    }
  }
  return maxStr;
};

