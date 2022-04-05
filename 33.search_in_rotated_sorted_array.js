/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) return mid;
    if (nums[right] === target) return right;
    if (nums[left] === target) return left;
    if (left === right) return -1;
    if (target > nums[mid]) {
      if (target < nums[right] || nums[right] < nums[mid]) {
        left = mid + 1;
        continue;
      } else {
        right = mid - 1;
        continue;
      }
    } else {
      if (target > nums[left] || nums[left] > nums[mid]) {
        right = mid - 1;
        continue;
      } else {
        left = mid + 1;
        continue;
      }
    }
  }
  return -1;
};
