/**
 * 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。
 * 请找出那个只出现一次的数字。

示例 1：

输入：nums = [3,4,3,3]
输出：4
示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1

限制：

1 <= nums.length <= 10000
1 <= nums[i] < 2^31

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
剑指 Offer 56 - II. 数组中数字出现的次数 II
https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/solution/mian-shi-ti-56-ii-shu-zu-zhong-shu-zi-chu-xian-d-4/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ones = 0, twos = 0;
  for (let num of nums) {
    ones = ones ^ num & ~twos;
    twos = twos ^ num & ~ones;
  }
  return ones;
};

var singleNumber = function(nums) {
  const counts = Array.from({length: 32}).fill(0);
  let res = 0;
  for (let num of nums) {
    for (let j = 0; j < 32; j++) {
      counts[j] += (num & 1);
      num >>>= 1
    }
  }
  for (let j = 0; j < 32; j++) {
    res <<= 1;
    res = res | (counts[31 - j] % 3);
  }
  return res;
}
