/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  const str = countAndSay(n - 1);
  let ans = "";
  for (let i = 0; i < str.length; ) {
    let num = 0;
    const val = str[i];
    while (str[i] === val) {
      num++;
      i++;
    }
    ans = `${ans}${num}${val}`;
  }
  return ans;
};
