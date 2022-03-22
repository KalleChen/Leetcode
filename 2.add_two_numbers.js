/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let current = new ListNode(0);
  let ans = current;
  let c = 0;
  while (l1 || l2) {
    let sum = (l1?.val || 0) + (l2?.val || 0);
    current.next = new ListNode((sum + c) % 10);
    c = Math.floor((sum + c) / 10);
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (c !== 0) {
    current.next = new ListNode(c);
  }
  return ans.next;
};
