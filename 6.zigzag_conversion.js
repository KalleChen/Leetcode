/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let zigzag = [new Array(numRows).fill("")];
  let currentColumn = 0;
  let currentRow = 0;
  let direction = 1;
  let stay = true;
  for (let char of s) {
    if (currentRow === -1) {
      currentRow = 1;
      direction = 1;
      currentColumn--;
      stay = true;
    }
    if (currentRow === numRows) {
      zigzag.push(new Array(numRows).fill(""));
      currentColumn++;
      currentRow = numRows - 2 < 0 ? 0 : numRows - 2;
      direction = -1;
      stay = false;
    }
    zigzag[currentColumn][currentRow] = char;
    console.log(char, currentColumn, currentRow);
    currentRow += direction;
    if (!stay) {
      zigzag.push(new Array(numRows).fill(""));
      currentColumn++;
    }
  }
  console.log(zigzag);
  let ans = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < zigzag.length; j++) {
      ans += zigzag[j][i];
    }
  }
  return ans;
};

