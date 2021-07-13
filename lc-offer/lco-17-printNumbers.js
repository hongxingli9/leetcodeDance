/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:

输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]

说明：

用返回一个整数列表来代替打印
n 为正整数
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    const max = Math.pow(10, n)
    const res = []
    for (let i = 1; i < max; ++i) {
        res.push(i)
    }
    return res
};

// DFS
var printNumbers = function (n) {
    const res = []
    function dfs(stringOfNumber, lengthOfBit) {
        if (stringOfNumber.length === lengthOfBit) {
            res.push(stringOfNumber)
            return
        }

        for (let i = 0; i <= 9; ++i) {
            stringOfNumber += i.toString()
            dfs(stringOfNumber, lengthOfBit)
            stringOfNumber = stringOfNumber.slice(0, -1)
        }
    }

    for (let m = 1; m <= n; ++m) {
        for (let i = 1; i <= 9; ++i) {
            dfs(i.toString(), m)
        }
    }

    return res
};
