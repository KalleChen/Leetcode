/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  const getSubset = (len: number, start: number): number[][] => {
    if (nums.length - start < len) return [];
    if (len === 0) return [];
    if (len === 1) return [[nums[start]]];
    let subsets = [];
    for (let i = 1; i + start < nums.length; ) {
      let nextSubsts = getSubset(len - 1, start + i);
      nextSubsts = nextSubsts.map((n) => [nums[start], ...n]);
      subsets = [...subsets, ...nextSubsts];
      const value = nums[start + i];
      while (start + i < nums.length && nums[start + i] === value) i++;
    }
    return subsets;
  };
  let subsets = [[]];
  for (let i = 0; i < nums.length; ) {
    for (let j = 0; j < nums.length + 1; j++) {
      subsets = [...subsets, ...getSubset(j, i)];
    }
    const value = nums[i];
    while (i < nums.length && nums[i] === value) i++;
  }
  return subsets;
}
// @lc code=end
