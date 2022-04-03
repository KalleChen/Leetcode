/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let remains = [],
    max = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= max) {
      max = nums[i];
      remains.push(nums[i]);
      if (i === 0) {
        const numsCopy = nums.sort((a, b) => a - b);
        for (let j = 0; j < nums.length; j++) {
          nums[j] = numsCopy[j];
        }
      }
    } else {
      const numsCopy = i === 0 ? [] : nums.slice(0, i);
      const target = nums[i];
      let targetNext = remains.length - 1;
      remains = remains.sort((a, b) => b - a);
      for (let j = 0; j < remains.length; j++) {
        if (remains[j] <= target) {
          targetNext = j - 1;
          break;
        }
      }
      targetNext = remains[targetNext];
      numsCopy.push(targetNext);
      remains[remains.indexOf(targetNext)] = target;
      remains = remains.sort((a, b) => a - b);
      remains.forEach((r) => {
        numsCopy.push(r);
      });
      for (let j = 0; j < nums.length; j++) {
        nums[j] = numsCopy[j];
      }
      return;
    }
  }
};
