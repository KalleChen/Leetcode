/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const checkNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  ans = "";
  i = 0;
  while (num != 0) {
    const times = Math.floor(num / checkNum[i]);
    if (times !== 0) {
      ans = `${ans}${roman[i].repeat(times)}`;
      num = num % checkNum[i];
    }
    i++;
  }
  return ans
};
