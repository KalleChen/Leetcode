/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = height.length - 1; j > i; j--) {
      if (Math.min(height[i], height[j]) * (j - i) > max)
        max = Math.min(height[i], height[j]) * (j - i);
      if (Math.min(height[i], height[j]) === height[i]) {
        break
      }
    }
  }
  return max;
};
