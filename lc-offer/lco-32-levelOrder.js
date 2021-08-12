/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]

提示：
节点总数 <= 1000
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const node = queue.shift();
    res.push(node.val)
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};
