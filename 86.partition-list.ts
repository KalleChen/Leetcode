/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) return head;
  let minCurrent: ListNode = null,
    prev: ListNode = null,
    current: ListNode = head;
  while (current && current.val < x) {
    if (!minCurrent) minCurrent = head;
    else minCurrent = current;
    if (!prev) prev = head;
    else prev = prev.next;
    current = current.next;
  }
  if (!prev) {
    prev = head;
    current = current.next;
  }
  while (current) {
    if (current.val < x) {
      let target = current;
      current = current.next;
      prev.next = current;
      if (!minCurrent) {
        target.next = head;
        head = target;
        minCurrent = target;
      } else {
        target.next = minCurrent.next;
        minCurrent.next = target;
        minCurrent = target;
      }
    } else {
      current = current.next;
      prev = prev.next;
    }
  }
  return head;
}
// @lc code=end
