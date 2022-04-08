/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const db = {};
  const findWord = (row, col, step, used) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length)
      return [false, false];
    const key = `${row}-${col}`;
    if (used[key]) return [false, true];
    if (board[row][col] === word[step]) {
      if (step === word.length - 1) return [true, false];
      used = { ...used, [key]: true };
      const steps = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
      const dbKey = `${row}-${col}-${step}`;
      if (!db[dbKey]) db[dbKey] = {};
      let hasWord = false;
      let blockByUsed = false;
      steps.forEach((s) => {
        const subKey = `${s[0]}x${s[1]}`;
        if (db[dbKey][subKey] !== undefined)
          hasWord = hasWord || db[dbKey][subKey];
        else {
          const result = findWord(row + s[0], col + s[1], step + 1, used);
          blockByUsed = blockByUsed || result[1]
          if (!result[1]) {
            db[dbKey][subKey] = result[0];
          }
          hasWord = hasWord || result[0];
        }
      });
      return [hasWord, blockByUsed];
    }
    return [false, false];
  };
  let hasWord = false;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      hasWord = hasWord || findWord(row, col, 0, {})[0];
    }
  }
  return hasWord;
};
// @lc code=end
