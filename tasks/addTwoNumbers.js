/*
* @param{ListNode}
* @param{ListNode}
* @return{ListNode}
* */

function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;

    while (p != null || q != null) {
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (p) p = p.next;
        if (q) q = q.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
}

function ListNode(val, next) {
    this.val = val != null ? val : 0;
    this.next = next != null ? val : null;
}

