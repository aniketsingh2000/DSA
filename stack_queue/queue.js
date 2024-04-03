// Queues:
// A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed.
//  Think of it like a line at a ticket counter: the person who joins the line first gets served first.


// Key Operations:
// Enqueue: Adds an element to the rear (end) of the queue.
// Dequeue: Removes and returns the front (first) element from the queue.
// Front: Returns the front element of the queue without removing it.
// isEmpty: Checks if the queue is empty.
// Size: Returns the number of elements in the queue.

// Common Use Cases:
// Process scheduling: Queues are used in operating systems to schedule processes for execution.
// Print spooling: Queues are used to manage print jobs in a printer's queue.
// Breadth-first search (BFS) algorithms: Queues are used to implement BFS in graph traversal algorithms.
// Implementation:
// Queues can be implemented using arrays or linked lists, where enqueue and dequeue operations are typically performed at opposite ends of the structure.

// Comparison:
// The key difference between stacks and queues lies in the order of insertion and deletion: LIFO for stacks and FIFO for queues.
// Stacks are used when you need to access items in the reverse order of their insertion, while queues are used when you need to access items in the same order as their insertion.
// Both stacks and queues are fundamental data structures that find applications in various domains of computer science and programming. Understanding their properties and applications is essential for any programmer or computer science enthusiast.

// code example 


class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue operation: Adds an element to the rear (end) of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue operation: Removes and returns the front (first) element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Front operation: Returns the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // isEmpty operation: Checks if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Size operation: Returns the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Print operation: Prints the elements of the queue
    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage:
const queue = new Queue();
console.log(queue.isEmpty()); // Output: true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.print()); // Output: 10 20 30
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.print()); // Output: 20 30
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
