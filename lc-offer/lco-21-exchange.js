/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 
提示：

0 <= nums.length <= 50000
1 <= nums[i] <= 10000

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    if (!nums.length) {return nums}
    let i = -1;
    let l = nums.length;
    while (i < l) {
        do i++; while (nums[i] % 2 && i <= l)
        do j--; while (nums[i] % 2 === 0 && 0 <= l)
        if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    return nums
};