/**
 * 统计一个数字在排序数组中出现的次数。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109

注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return 0;
  let start = 0, end = nums.length - 1;
  for (; start < nums.length; start++) {
    if (nums[start] === target) {
      break;
    }
  }
  if (start > end) {
    return 0;
  }
  for (; 0 <= end; end--) {
    if (nums[end] === target) {
      break;
    }
  }
  return end - start + 1;
};

var search = function(nums, target) {
  if (nums.length === 0) return 0;
  let i = 0, j = nums.length - 1;
  let m = 0;
  while (i <= j) {
    m = Math.floor((i + j) / 2);
    if (target >= nums[m]) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  if (j >= 0 && nums[j] !== target) {
    return 0;
  }
  const right = i;
  i = 0;
  j = nums.length - 1;
  while (i <= j) {
    m = Math.floor((i + j) / 2);
    if (target > nums[m]) {
      i = m + 1;
    }
    else {
      j = m - 1;
    }
  }
  const left = j;
  return right - left - 1;
}
