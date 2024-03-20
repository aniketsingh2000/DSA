class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (!this.items.length) {
            return;
        }
        this.items.pop();
    }

    peek() {
        if (!this.items.length) {
            throw new Error('Stack is empty');
        } else {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return !this.items.length;
    }

    size(){
        return this.items.length;
    }

    print() {
        console.log(this.items);
      }


}

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);

// myStack.print();
// console.log("Top element:", myStack.peek()); // Output: 3

// myStack.pop();
// console.log("After pop:");
// myStack.print(); // Output: 1 2



class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue element to the back of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    // Front element without removing it
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the queue elements
    print() {
      console.log(this.items.join(' '));
    }
  }
  
  // Example usage:
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  console.log("Front element:", myQueue.front()); // Output: 1
  
  myQueue.dequeue();
  console.log("After dequeue:");
  myQueue.print(); // Output: 2 3
  