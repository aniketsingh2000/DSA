class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//LIFO stack with singly linked list ;
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    addAtBeginning(value) {
        let node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            node.next = temp;
            this.first = node;
        }
        this.size++;
        return this.first;
    }
    removeFromBeginning() {

        if (!this.first) {
            return null;
        } else {
            let temp = this.first;
            this.first = this.first.next;
            this.size--;
            if (this.size === 0) {
                this.last = null;
            }
            return temp
        }
    }
}

const stack = new Stack();
console.log(stack.addAtBeginning(3));
console.log(stack.addAtBeginning(4));
console.log(stack.addAtBeginning(5));
console.log(stack.addAtBeginning(6));
console.log("remove start");
console.log(stack.removeFromBeginning());
console.log(stack.removeFromBeginning());
console.log(stack.removeFromBeginning());
console.log(stack.removeFromBeginning());
console.log(stack.removeFromBeginning())