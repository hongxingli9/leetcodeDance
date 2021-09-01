/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:
s = "abaccdeff"
返回 "b"

s = "" 
返回 " "

限制：

0 <= s 的长度 <= 50000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (!s || s.length === 0) return ' '
  const dics = new Map();
  for (let i = 0; i < s.length; i++) {
    dics.set(s[i], !dics.has(s[i]));
  }
  // for (let i = 0; i < s.length; i++) {
  //   if (dics.get(s[i])) return s[i];
  // }
  for ([key, value] of dics.entries()) {
    if (value) return key;
  }
  return ' '
};
