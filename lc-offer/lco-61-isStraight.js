/**
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，
 * 即这5张牌是不是连续的。2～10为数字本身，
 * A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

示例 1:

输入: [1,2,3,4,5]
输出: True

示例 2:

输入: [0,0,1,2,5]
输出: True

限制：

数组长度为 5 

数组的数取值为 [0, 13] .

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  // 表示大小王的个数
  let k = 0;
  // 表示需要连续的数字时还差值多少
  let t = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      k++;
      continue;
    }
    if (nums[i + 1] === nums[i]) return false;
    if (nums[i + 1] - nums[i] > 1) t += nums[i + 1] - nums[i] - 1;
  }
  return k - t >= 0
};

// 方法2
var isStraight = function(nums) {
  let min = 14, max = 0;
  const repeat = new Set();
  for (num of nums) {
    if (num === 0) continue;
    if (repeat.has(num)) return false;
    max = Math.max(max, num);
    min = Math.min(min, num);
    repeat.add(num);
  }
  return max - min < 5;
}

// 方法3
var isStraight = function(nums) {
  // 表示大小王的个数
  let k = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < 4; i++) {
    if (nums[i] === 0) {
      k++;
    }
    else if (nums[i + 1] === nums[i]) return false;
  }
  return nums[4] - nums[k] < 5;
};
