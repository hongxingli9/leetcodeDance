/**
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  quickSort(nums, 0, nums.length - 1)
  return nums.join('');
};

function quickSort(arr, l, r) {
  if (l >= r) return;
  let i = l;
  let j = r;
  while (i < j) {
    // 下面两个循环的顺序不能调换，调换就是错误的结果
    while (i < j && arr[j] + '' + arr[l] >= arr[l] + '' + arr[j]) j--;
    while (i < j && arr[l] + '' + arr[i] >= arr[i] + '' + arr[l]) i++;
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
  [arr[i], arr[l]] = [arr[l], arr[i]];
  quickSort(arr, l, i - 1);
  quickSort(arr, i + 1, r);
}

