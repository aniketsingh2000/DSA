class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class DoubleyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAtHead(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node; 
        } else {
            node.next = this.head;
            this.head.prev = value;
            this.head = node;
        }
    }


    addAtTail(value) {
        if (!this.head) {
            this.addAtHead(value);
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            let node = new Node(value);
            node.prev = current.value;
            current.next = node;
            this.tail = node;
        }
    }

    addAtIndex(index, value) {

        if (!this.head || index === 0) {
            this.addAtHead(value);
        } else {
            let current = this.head
            let prev;
            while (index > 0 && current != null) {
                prev = current;
                current = current.next
                index--;
            }
            if (current === null) {
                if (index === 0) {
                    this.addAtTail(value);
                    return;
                }
                console.log("given index not found");
                return;
            }

            let node = new Node(value);
            node.prev = current.prev;
            node.next = current;
            prev.next = node;
        }
    }

    deleteAtIndex(index) {

        if (index === 0) {
            let current = this.head;
            this.head = current.next;
        } else {
            let current = this.head;
            let prev;
            while (index > 0) {
                prev = current;
                if (!current.next) {
                    return -1;
                } else {
                    current = current.next;
                    index--;
                }
            }
            current.next.prev = prev;
            prev.next = current.next;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }


    finduniqueLinkedList() {
    }


    removeDuplicates() {
    }


    reverse() {

        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }

        this.head = prev;
    }



    checkLoop(head = this.head) {
    }


    createLoop() {
        if (this.head && this.head.next && this.head.next.next) {
            // Creating a loop by setting the next of the last node to the second node
            this.tail.next = this.head.next;
            this.head.next.prev = this.tail;
        }
    }

    printSingleList() {
        console.log(this.head);
    }
}


const list = new DoubleyLinkedList();
list.addAtHead(3);
list.addAtHead(2);
// list.print();
console.log("-----print-end----------");
list.addAtTail(5);
list.addAtTail(4);
// list.print();
console.log("-----print-end----------");
list.addAtIndex(3, 6);
list.print();
console.log("-----print-end----------");
// list.deleteAtIndex(2);

list.reverse();

/* `list.printSingleList();` is a method call that prints the head of the doubly linked list. It will
output the value of the head node of the linked list. */
list.print();
console.log("-----print-end----------");

list.createLoop();

list.print();
console.log("-----print-end----------");

// list.printSingleList();