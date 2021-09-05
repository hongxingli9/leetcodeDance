/**
 * 给定一棵二叉搜索树，请找出其中第k大的节点。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let target = null;
  dfs(root);
  return target.val;

  function dfs (node) {
    if (node === null) return;
    dfs(node.right);
    if (--k === 0) {
      target = node;
      return;
    }
    dfs(node.left);
  }
}