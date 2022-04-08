/*
 * @lc app=leetcode id=89 lang=typescript
 *
 * [89] Gray Code
 */

// @lc code=start
function grayCode(n: number): number[] {
  const getNum = (numStr: string): number => {
    let num = 0,
      current = 1;
    for (let i = numStr.length - 1; i >= 0; i--) {
      if (numStr[i] === "1") {
        num += current;
      }
      current *= 2;
    }
    return num;
  };
  const getString = (str: string): number[] => {
    if (str.length === n) return [getNum(str)];
    let str1: number[] = getString(str + "0");
    let str2: number[] = getString(str + "1");
    for (let i = str2.length - 1; i >= 0; i--) {
      str1.push(str2[i]);
    }
    return str1;
  };
  return getString("");
}
// @lc code=end
