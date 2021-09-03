/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，
 * 则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

示例 1:

输入: [7,5,6,4]
输出: 5

限制：

0 <= 数组长度 <= 50000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  const temp = [];
  return mergeSort(0, nums.length - 1)

  function mergeSort(l, r) {
    if (l >= r) return 0;
    const m = Math.floor((r - l) / 2);
    let res = mergeSort(l, l + m) + mergeSort(l + m + 1, r);
    let i = l, j = l + m + 1;
    for (k = l; k <= r; k++) {
      temp[k] = nums[k]
    }
    for (k = l; k <= r; k++) {
      if (i === l + m + 1) {
        nums[k] = temp[j++];
      }
      else if (j === r + 1 || temp[i] <= temp[j]) {
        nums[k] = temp[i++];
      }
      else {
        nums[k] = temp[j++];
        res += l + m - i + 1;
      }
    }
    return res;
  }
};
