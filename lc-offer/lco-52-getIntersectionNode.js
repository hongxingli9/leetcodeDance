/**
 * 输入两个链表，找出它们的第一个公共节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let pA = headA;
  let pB = headB;
  let lenA = 0;
  let lenB = 0;
  while (pA) {
    lenA++;
    pA = pA.next;
  }
  while (pB) {
    lenB++;
    pB = pB.next;
  }
  let fast = low = null;
  let step = Math.abs(lenA - lenB);
  if (lenA < lenB) {
    low = headA;
    fast = headB
  }
  else {
    low = headB;
    fast = headA;
  }
  while (step--) {
    fast = fast.next;
  }
  while (fast && low) {
    if (fast === low) {
      return fast;
    }
    fast = fast.next;
    low = low.next;
  }
  return null;
};

// 方法2
var getIntersectionNode = function(headA, headB) {
  let A = headA, B = headB;
  while (A !== B) {
    A = A !== null ? A.next : headB;
    B = B !== null ? B.next : headA;
  }
  return A;
};
