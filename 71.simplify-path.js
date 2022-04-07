/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathNames = [];
  path.split("/").forEach((p) => {
    if (p === "" || p === ".") return;
    else if (p === "..") pathNames.pop();
    else {
      pathNames.push(p);
    }
  });
  let ans = "";
  pathNames.forEach((p) => (ans += `/${p}`));
  if (ans === "") ans = "/";
  return ans;
};
// @lc code=end
