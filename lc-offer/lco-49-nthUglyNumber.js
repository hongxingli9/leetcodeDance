/**
 * 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。
 * 求按从小到大的顺序的第 n 个丑数。

示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  

1 是丑数。
n 不超过1690。
注意：本题与主站 264 题相同：https://leetcode-cn.com/problems/ugly-number-ii/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/chou-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const res = [1];
  let p2 = p3 = p5 = 0;
  for (let i = 1; i < n; i++) {
    res[i] = Math.min(
      res[p2] * 2,
      res[p3] * 3,
      res[p5] * 5
    )
    if (res[i] === res[p2] * 2) p2++;
    if (res[i] === res[p3] * 3) p3++;
    if (res[i] === res[p5] * 5) p5++;
  }
  return res[n - 1];
};
