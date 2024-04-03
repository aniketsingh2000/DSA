// Stacks:
// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Think of it like a stack of plates in a cafeteria: you can only remove the topmost plate.


// Key Operations:
// Push: Adds an element to the top of the stack.
// Pop: Removes and returns the top element from the stack.
// Peek (or Top): Returns the top element of the stack without removing it.
// isEmpty: Checks if the stack is empty.
// Size: Returns the number of elements in the stack.

// Common Use Cases:
// Function call stack: In many programming languages, the function call stack is a stack data structure that stores information about the active subroutines and function calls.
// Undo mechanisms: Stacks are often used in applications to implement undo functionality.
// Expression evaluation: Stacks can be used to evaluate expressions, such as infix, postfix, or prefix notation.

// Implementation:
// Stacks can be implemented using arrays or linked lists, where the top of the stack is represented by the end of the array or the head of the linked list.


// code example 


class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage:
const stack = new Stack();
console.log(stack.isEmpty()); // Output: true
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.print()); // Output: 10 20 30
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.print()); // Output: 10 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
