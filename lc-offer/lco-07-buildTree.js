/**
 * 
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  /**
   * 
   * @param {*} root preorder里的索引
   * @param {*} left inorder里的左边界
   * @param {*} right inorder里的右边界
   * @returns 
   */
  const recur = function (root, left, right) {
    if (left > right) return null;
    let node = new TreeNode(preorder[root]);
    let i = dics.get(preorder[root]);
    // root + 1 在preorder中的索引，为左子树的根节点
    node.left = recur(root + 1, left, i - 1);
    // i - left + root + 1 表示在preorder中的索引，为右字数的根节点。 i - left代表左子树边界left 到 inorder i
    // 索引的距离，代表左字树中元素的个数 。
    node.right = recur(i - left + root + 1, i + 1, right);
    return node;
  }
  const dics = new Map();
  for (let i = 0; i < inorder.length; ++i) {
    dics.set(inorder[i], i);
  }
  return recur(0, 0, inorder.length - 1);
};
