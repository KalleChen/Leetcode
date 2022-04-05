/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let ans = [-1, -1],
    left = 0,
    right = nums.length - 1,
    pos = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[left] === target) {
      pos = left;
      break;
    }
    if (nums[mid] === target) {
      pos = mid;
      break;
    }
    if (nums[right] === target) {
      pos = right;
      break;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (pos === -1) return ans;
  while (pos - 1 >= 0 && nums[pos - 1] === target) pos--;
  ans[0] = pos;
  while (pos + 1 < nums.length && nums[pos + 1] === target) pos++;
  ans[1] = pos;
  return ans;
};
