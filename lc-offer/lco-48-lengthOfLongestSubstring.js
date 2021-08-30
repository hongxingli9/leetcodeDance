/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

提示：
s.length <= 40000
注意：本题与主站 3 题相同：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0;
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    const index = temp.indexOf(s[i]);
    if (index > -1) {
      res = Math.max(res, temp.length);
      temp = temp.slice(index + 1) + s[i];
    } else {
      temp += s[i];
    }
  }
  return Math.max(res, temp.length);
};

// 动态规划 + 哈希表
var  lengthOfLongestSubstring = function(s) {
  let res = 0;
  let temp = 0;
  const dics = {};
  for (let j = 0; j < s.length; j++) {
    const i = dics[s[j]] !== undefined ? dics[s[j]] : -1;
    dics[s[j]] = j;
    temp = temp < j - i ? temp + 1 : j - i;
    res = Math.max(res, temp);
  }
  return res;
};

// 双指针 + 哈希表
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let i = -1;
  const dics = {};
  for (let j = 0; j < s.length; j++) {
    if (dics[s[j]] !== undefined) {
      i = Math.max(i, dics[s[j]]);
    }
    dics[s[j]] = j;
    res = Math.max(res, j - i)
  }
  return res;
}
