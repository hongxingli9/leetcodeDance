/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
 * 还有一个 random 指针指向链表中的任意节点或者 null。

示例 1：


输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
示例 2：

输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
示例 3：


输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
示例 4：

输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。 

提示：

-10000 <= Node.val <= 10000
Node.random 为空（null）或指向链表中的节点。
节点数目不超过 1000 。

*/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  // 创建拷贝节点，插入到当前节点与next节点之间。
  let p = head;
  while (p) {
    let copy = new Node(p.val, p.next, null);
    p.next = copy;
    p = copy.next;
  }

  // 设置拷贝节点的random指针，copy节点的random指向为被拷贝节点random指向节点的next节点
  p = head;
  while (p) {
    p.next.random = !p.random ? p.random : p.random.next;
    p = p.next.next;
  }

  // 把所有拷贝节点剥离出来
  p = head;
  head = head.next;
  while (p) {
    let copy = p.next;
    p.next = p.next.next;
    copy.next = !p.next ? p.next : p.next.next;
    p = p.next;
  }

  return head;
};
