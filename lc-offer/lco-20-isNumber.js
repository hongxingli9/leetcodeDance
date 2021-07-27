/**
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
 

示例 1：

输入：s = "0"
输出：true
示例 2：

输入：s = "e"
输出：false
示例 3：

输入：s = "."
输出：false
示例 4：

输入：s = "    .1  "
输出：true
 

提示：

1 <= s.length <= 20
s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，空格 ' ' 或者点 '.' 。

思路：
1. 创建开始0的索引，首先扫描空格，直到遇到非空格。
2. 从非空格的字符开始，扫描小数点或'e','E'前面的整数，记为n位,整数可以是
正负的。判断完正负后，扫描剩下的n位，直至遇到非数字字符为止。
3. 从这一位特殊位开始，如果是'.', 从下一位开始，扫描判断是否为无符整数，直至
遇到非数字符号。如果这部分是整数，暂把结果记为true。
4. 判断遇到的是否为'e','E'，然后从下一位开始，扫描判断是否为正负的整数，直至
遇到非数字符号。如果前面的结果为整数，这部分也是整数，则结果记为true。
5. 如果后面是空格，则继续循环往前扫描。
6. 如果遇到的非空格且不是undefined，则返回false,说明不是数字。
7. 最后返回结果。

 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if (!s) return false;
    let isValid = false;
    let c = 0;
    function scanSignedInteger(s) {
        if (s[c] === '+' || s[c] === '-') {
            c++;
        }
        return scanUnsignedInteger(s);
    }
    function scanUnsignedInteger(s) {
        let temp = c;
        while (s[c] >= '0' && s[c] <= '9') {
            c++;
        }
        return s[temp] >= '0' && s[temp] <= '9';
    }
    while (s[c] === ' ') {
        c++
    }
    isValid = scanSignedInteger(s);
    if (s[c] === '.') {
        c++
        if (scanUnsignedInteger(s)) {
            isValid = true
        }
    }
    if (s[c] === 'e' || s[c] === 'E') {
        c++;
        if (isValid) {
            isValid = scanSignedInteger(s);
        }
    }
    while (s[c] === ' ') {
        c++
    }
    if (s[c] !== undefined) {
        return false;
    }
    return isValid;
};
