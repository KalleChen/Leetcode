/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head,
    len = 1;
  while (current.next) {
    current = current.next;
    len++;
  }
  current = head;
  if (len - n - 1 < 0) {
    return current.next;
  }
  for (let i = 0; i < len - n - 1; i++) {
    current = current.next;
  }
  current.next = current?.next?.next;
  return head;
};
// @lc code=end
