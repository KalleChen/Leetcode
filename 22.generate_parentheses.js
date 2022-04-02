/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const db = {
    0: [""],
    1: ["()"],
    2: ["(())", "()()"],
  };
  const generateCombintaion = (num) => {
    if (db[num]) return db[num];
    const combinations = [],
      used = {};
    let coms = generateCombintaion(num - 1);
    coms.forEach((com) => {
      [`(${com})`, `()${com}`, `${com}()`].forEach((c) => {
        if (!used[c]) {
          combinations.push(c);
          used[c] = true;
        }
      });
    });
    for (let i = num - 1; i > 0; i--) {
      const coms1 = generateCombintaion(i);
      const coms2 = generateCombintaion(num - i);
      coms1.forEach((com1) => {
        coms2.forEach((com2) => {
          const value = `${com1}${com2}`;
          if (!used[value]) {
            combinations.push(value);
            used[value] = true;
          }
        });
      });
    }
    return combinations;
  };
  return generateCombintaion(n);
};

