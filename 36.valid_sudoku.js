/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const usedRow = {},
    usedColumn = {},
    usedBlock = {};
  for (let row = 0; row < 9; row++) {
    if (!usedRow[row]) usedRow[row] = {};
    for (let col = 0; col < 9; col++) {
      const val = board[row][col];
      if (val === ".") continue;
      if (!usedColumn[col]) usedColumn[col] = {};
      if (usedRow[row][val]) return false;
      usedRow[row][val] = true;
      if (usedColumn[col][val]) return false;
      usedColumn[col][val] = true;
      const block = `${Math.floor(row / 3)}${Math.floor(col / 3)}`;
      if (!usedBlock[block]) usedBlock[block] = {};
      if (usedBlock[block][val]) return false;
      usedBlock[block][val] = true;
    }
  }
  return true;
};
