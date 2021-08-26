/**
 * 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

示例 1：

输入：n = 12
输出：5
示例 2：

输入：n = 13
输出：6

限制：

1 <= n < 2^31
注意：本题与主站 233 题相同：https://leetcode-cn.com/problems/number-of-digit-one/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let cur = n % 10;
  let high =  Math.floor(n / 10);
  let low = 0;
  let digit = 1;
  let res = 0;
  while (high !== 0 || cur !== 0) {
    if (cur === 0) res += high * digit;
    else if (cur === 1) res += high * digit + low + 1;
    else if (cur > 1) res += (high + 1) * digit;
    low += cur * digit;
    cur = high % 10;
    high = Math.floor(high / 10);
    digit *= 10;
  }
  return res;
};

