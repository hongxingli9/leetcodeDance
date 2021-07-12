/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
 * 不得使用库函数，同时不需要考虑大数问题。
示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
 

提示：

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104

 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let isNavigate = n < 0
    let res = absPow(x, Math.abs(n))
    return isNavigate ? 1 / res : res
}

function absPow(base, exponent) {
    if (exponent === 0) {
        return 1
    }

    if (exponent === 1) {
        return base
    }

    let res = absPow(base, Math.floor(exponent / 2))
    return exponent % 2 ? res * res * base : res * res
}