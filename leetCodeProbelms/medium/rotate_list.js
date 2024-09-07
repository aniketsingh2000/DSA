function rotateRight(head, k) {
    if (!head || !head.next || k === 0) return head;
    let tail = head;
    let length = 1;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    tail.next = head;
    k = k % length;
    let stepsToNewHead = length - k;
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
}