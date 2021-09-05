/**
 * 输入一棵二叉树的根节点，求该树的深度。
 * 从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，
 * 最长路径的长度为树的深度。
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
 * @return {number}
 */
var maxDepth = function(root) {
  return deepOfTree(root)
  function deepOfTree(node) {
    if (!node) return 0;
    return Math.max(deepOfTree(node.left) + 1, deepOfTree(node.right) + 1);
  }
}

// 方法2
var maxDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let res = 0;
  while (queue.length > 0) {
    let temp = [];
    for (let node of queue) {
      node.left && temp.push(node.left);
      node.right && temp.push(node.right);
    }
    queue = temp;
    res++;
  }
  return res;
}
