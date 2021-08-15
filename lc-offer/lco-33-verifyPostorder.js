/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。
 * 如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true

提示：

数组长度 <= 1000
 */
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  if (postorder.length === 0 || !postorder) return false;
  return verifyPostorderArray(0, postorder.length - 1, postorder);
};
function verifyPostorderArray(start, end, postorder) {
  if (start >= end) return true;
  let p = start;
  while (postorder[p] < postorder[end]) p++;
  let m = p;
  while (postorder[p] > postorder[end]) p++;
  return p == end && verifyPostorderArray(start, m - 1, postorder) && verifyPostorderArray(m, end - 1, postorder);
}


/**
 * 方法2，辅助单调栈
 * 参考： https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/mian-shi-ti-33-er-cha-sou-suo-shu-de-hou-xu-bian-6/
 */
var verifyPostorder = function(postorder) {
  const stack = [];
  let root = Number.MAX_VALUE;
  for (let i = postorder.length - 1; i >= 0; i--) {
    if (postorder[i] > root) return false;
    while (stack.length > 0 && stack[stack.length - 1] > postorder[i]) {
      root = stack.pop();
    }
    stack.push(postorder[i]);
  }
  return true;
};
