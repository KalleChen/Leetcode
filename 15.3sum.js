/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    if (!(i !== 0 && nums[i] === nums[i - 1])) {
      while (right > left) {
        const sums = nums[i] + nums[left] + nums[right];
        if (sums === 0) {
          ans.push([nums[i], nums[left], nums[right]]);
          left++;
          while (nums[left] === nums[left - 1] && left < right) left++;
        } else if (sums > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return ans;
};
