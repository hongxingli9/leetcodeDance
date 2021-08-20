/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

限制：

1 <= s 的长度 <= 8

 */
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  const seen = {};
  const res = new Set();
  const len = s.length;
  dfs('')
  return [...res];
  function dfs(path) {
    if (path.length === len) {
      return res.add(path);
    }
    for (let i = 0; i < len; i++) {
      if (seen[i]) continue;
      seen[i] = true;
      dfs(path + s[i]);
      seen[i] = false;
    }
  }
};

/**
 * 方法2
 */
var permutation = function(s) {
  if (s === '') return [''];
  const res = new Set();
  const list = s.split('');
  dfs(0)
  return [...res];
  function dfs(x) {
    if (x === list.length - 1) {
      return res.add(list.join(''));
    }
    const seen = new Set();
    for (let i = x; i < list.length; i++) {
      if (seen.has(list[i])) continue;
      seen.add(list[i]);
      [list[i], list[x]] = [list[x], list[i]];
      dfs(x + 1);
      [list[i], list[x]] = [list[x], list[i]];
    }
  }
};
