/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，
 * 1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

提示：

0 <= num < 231
*/
/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
  const str = num + '';
  // a,b分别代表dp[i-2],dp[i-1], 初始dp[0]=dp[1]=1
  let a = 1;
  let b = 1;
  for (let i = 2; i <= str.length; i++) {
    const temp = str.slice(i - 2, i);
    const c = temp >= '10' && temp <= '25' ? a + b : b;
    a = b;
    b = c;
  }
  return b;
};


// 方法2
var translateNum = function(num) {
  // 从右往左推，取余和求整运算
  // a,b分别代表dp[i+2],dp[i+1], 初始dp[lenth]=dp[length + 1]=1
  let a = 1;
  let b = 1;
  let x = 0;
  let y = num % 10;
  while (num) {
    num = Math.floor(num / 10);
    x = num % 10;
    const temp = 10 * x + y;
    const c = temp >= 10 && temp <= 25 ? a + b : a;
    b = a;
    a = c;
    y = x;
  }
  return a;
};
