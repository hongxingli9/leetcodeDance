/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

提示：
节点总数 <= 1000
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const stack = [root];
  const res = [];
  // 第0层
  let index = 0;
  // 当前层数需要打印的个数，初始化为第0层，1个。
  let cur = 1;
  // 下一层需要打印的个数
  let next = 0;
  while (stack.length > 0) {
    let node = stack.shift();
    cur--
    if (!res[index]) {
      res[index] = [];
    }
    res[index].push(node.val);
    if (node.left) {
      stack.push(node.left);
      // push进去的都是属于下一层的，所以加1
      next++;
    }
    if (node.right) {
      stack.push(node.right);
      // push进去的都是属于下一层的，所以加1
      next++;
    }
    // 当当前层的打印完，切换到下一层
    if (cur === 0) {
      index++;
      cur = next;
      next = 0;
    }
  }
  return res;
};

// 方法2
var levelOrder = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    const temp = [];
    for (let i = queue.length; i > 0; i--) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    res.push(temp);
  }
  return res;
};
