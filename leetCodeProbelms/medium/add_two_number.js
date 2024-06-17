// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


function Node(val, next = null){
  this.data = val;
  this.next = next;
}


function addTwoNumbers(l1,l2){
    let dummyHead = new Node(0);
    let current = dummyHead;
    let p = l1, q = l2;
    let carry = 0 ;

    while(p!== null || q!== null){
        let x = (p !== null) ?  p.data : 0;
        let y = (q !== null) ?  q.data : 0;
        let sum = carry + x + y ;
        carry = Math.floor(sum/10);
        current.next = new Node(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if(carry>0){
        current.next = new Node(carry)
     }

     return dummyHead.next;
}

let l1 = new Node(9, new Node(9, new Node(9,new Node(9,new Node(9,new Node(9,new Node(9)))))));
let l2 = new Node(9, new Node(9, new Node(9,new Node(9))));

let result = addTwoNumbers(l1, l2);
while (result !== null) {
    console.log(result.data);
    result = result.next;
}