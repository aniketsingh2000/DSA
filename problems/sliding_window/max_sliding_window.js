// Sliding Window Maximum
// Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.


Example:

Input: nums = [2,3,-2,-4,5,2,8,11], k = 3

Output: [3,3,5,5,8,11]





// Node class for the doubly linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Deque class using a doubly linked list
class Deque {
    constructor() {
        this.head = null;  // Points to the front of the deque
        this.tail = null;  // Points to the back of the deque
        this.size = 0;     // Tracks the size of the deque
    }

    // Add an element to the back of the deque
    pushBack(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Remove and return the element from the back of the deque
    popBack() {
        if (this.size === 0) return null;
        const removedValue = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.size--;
        return removedValue;
    }

    // Add an element to the front of the deque
    pushFront(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Remove and return the element from the front of the deque
    popFront() {
        if (this.size === 0) return null;
        const removedValue = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return removedValue;
    }

    // Peek the element at the front of the deque without removing it
    peekFront() {
        if (this.size === 0) return null;
        return this.head.value;
    }

    // Peek the element at the back of the deque without removing it
    peekBack() {
        if (this.size === 0) return null;
        return this.tail.value;
    }

    // Check if the deque is empty
    isEmpty() {
        return this.size === 0;
    }
}

// Sliding Window Maximum Function using custom Deque
function maxSlidingWindow(nums, k) {
    const dq = new Deque();  // Custom deque implementation

    let result = [];

    for (let i = 0; i < nums.length; i++) {

        if (!dq.isEmpty() && dq.peekFront() < i - k + 1) {
            dq.popFront();
        }

        while (!dq.isEmpty() && nums[dq.peekBack()] <= nums[i]) {
            dq.popBack();
        }

        dq.pushBack(i);

        if (i >= k - 1) {
            result.push(nums[dq.peekFront()]);
        }

    }

    return result

}

// Example usage:
const nums = [2, 3, -2, -4, 5, 2, 8, 11];
const k = 3;
console.log(maxSlidingWindow(nums, k)); // Output: [3, 3, 5, 5, 8, 11]


