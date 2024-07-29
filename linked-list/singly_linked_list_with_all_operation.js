class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addAtHead(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node
        }
    }
    addAtTail(value) {
        if (!this.head) {
            addAtHead(value)
        } else {
            let node = new Node(value);
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.tail = node;
        }
    }
    addAtIndex(index, value) {
        if (!this.head || index === 0) {
            addAtHead(value)
        } else {
            let node = new Node(value);
            let current = this.head;
            let prev;
            while (index > 0) {
                prev = current
                current = current.next;
                index--
            }
            node.next = current
            prev.next = node;
        }
    }
    deleteAtIndex(index) {

        if (!this.head) {
            return -1;
        } else {
            if (index === 0) {
                let current = this.head;
                let prev = current.next;
                this.head = prev;
                return current.value
            } else {
                let current = this.head;
                let prev;
                while (index > 0) {
                    prev = current;
                    if (!current.next) {
                        return -1;
                        index = 0
                    } else {
                        current = current.next;
                        index--;
                    }
                }

                prev.next = current.next;
                return current.value;
            }
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    printSingleList() {
        console.log(this.tail);
    }
}


let list = new SinglyLinkedList();
list.addAtHead(2);
list.addAtHead(4);
list.addAtTail(3);
list.addAtTail(8);
list.addAtTail(9);
list.print();
console.log("----print-end------")
list.addAtIndex(2, 6);
list.addAtIndex(5, 7);
list.print();
console.log("----print-end------")
const del = list.deleteAtIndex(4);
console.log("delete value = ", del == -1 ? "Given index not found" : del);
list.print();
console.log("----print-end------")
list.printSingleList();
