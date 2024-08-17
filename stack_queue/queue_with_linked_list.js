class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//FIFO
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        let node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }
    dequeue() {
        if (!this.first) return 0;

        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        if (this.size == 0) {
            this.last = null;
        }

        return temp;
    }
}

const queue = new Queue();
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));


console.log("----deque");

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());




