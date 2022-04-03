/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let current = head;
  let prev = null;
  let headChanged = false;
  while (current?.next) {
    const a = current,
      b = current.next,
      c = current.next?.next;
    b.next = a;
    a.next = c;
    current = c;
    if (prev) {
      prev.next = b;
    }
    prev = a;
    if (!headChanged) {
      head = b;
      headChanged = true;
    }
  }
  return head;
};
