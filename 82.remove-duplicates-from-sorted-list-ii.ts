/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let current: ListNode = head,
    prev: ListNode | null = null,
    currentVal: number = head.val;
  current = current.next;
  while (current) {
    if (current.val === currentVal) {
      while (current && current.val === currentVal) current = current.next;
      if (!prev) head = current;
      else {
        prev.next = current;
      }
      currentVal = current?.val;
      current = current?.next;
    } else {
      currentVal = current?.val;
      current = current?.next;
      if (!prev) prev = head;
      else prev = prev?.next;
    }
  }
  return head;
}
// @lc code=end
