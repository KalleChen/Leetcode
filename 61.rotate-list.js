/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) return head;
  let current = head;
  let len = 1;
  while (current.next) {
    current = current.next;
    len++;
  }
  current = head;
  k %= len;
  if (k === 0) return head;
  let target;
  for (let i = 0; i < len - k - 1; i++) {
    current = current.next;
  }
  target = current.next;
  current.next = null;
  current = target;
  while (current?.next) current = current?.next;
  current.next = head;
  return target;
};
// @lc code=end
