/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

注意：本题与主站 239 题相同：https://leetcode-cn.com/problems/sliding-window-maximum/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  let i = 0, j = k - 1;
  let res = [];
  while (j <= nums.length - 1) {
    res.push(Math.max.apply(Math, nums.slice(i, j + 1)));
    i++;
    j++;
  }
  return res;
};

// 方法2
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  const res = [];
  const deque = [];
  for (let i = 1 - k, j = 0; j < nums.length; i++, j++) {
    if (i > 0 && deque[0] === nums[i - 1]) {
      deque.shift();
    }
    while (deque.length > 0 && deque[deque.length - 1] < nums[j]) {
      deque.pop();
    }
    deque.push(nums[j]);
    if (i >= 0) {
      res.push(deque[0]);
    }
  }
  return res;
}
