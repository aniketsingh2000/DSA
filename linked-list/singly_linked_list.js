// A singly linked list is a type of linked list where each node in the list contains a piece of data and a reference (or pointer) to the next node in the sequence. The last node in the list points to null, indicating the end of the list.

// Structure of a Single Linked List:

// Each node contains two fields: data and a pointer/reference to the next node.
// The first node is called the head, and the last node points to null.

// Usage:
// Singly linked lists are used when you need a dynamic data structure that can efficiently insert and delete elements at the beginning or end of the list.
// They are commonly used to implement other data structures like stacks, queues, and hash tables.
// Singly linked lists are also used in memory management systems and in implementing adjacency lists for graphs.

// Advantages:
// Dynamic Size: Singly linked lists can dynamically grow or shrink in size during program execution.
// Efficient Insertion and Deletion: Insertion and deletion operations at the beginning of the list are efficient as they require updating only the head pointer.
// Memory Efficiency: Singly linked lists use memory efficiently as memory is allocated dynamically for each node.

// Disadvantages:
// No Random Access: Unlike arrays, singly linked lists do not support random access to elements. Accessing elements by index requires traversing the list from the beginning.
// Extra Memory Overhead: Singly linked lists require extra memory for storing pointers/references to the next node, which can increase memory overhead compared to arrays.

// Real-life Example:
// Consider a music playlist as a real-life example of a singly linked list. Each song in the playlist can be represented as a node, containing data (song name, artist, duration) and a reference to the next song in the playlist. 
// Advantages of using a singly linked list for a music playlist include the ability to efficiently add or remove songs from the beginning or end of the playlist, as well as the dynamic nature of the playlist, allowing users to add or remove songs dynamically. 
// However, one disadvantage is that users cannot directly jump to a specific song in the playlist without traversing from the beginning.


// code example


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SingleLinkedList {
    constructor() {
        this.head = null;
    }

    insertInBeginning(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    insetAtEnd(data) {
        if (!this.head) {
            this.insertInBeginning(data);
        } else {
            let node = new Node(data);
            let current = this.head;
            while (current) {
                current = current.next;
            }
            current.next = node;
        }
    }

    removeFromBeginning() {
        if (!this.head) {
            return null;
        } else {
            let removeNode = this.head;
            this.head = this.head.next;
            return removeNode.data;
        }
    }


    removeFromEnd() {
        if (!this.head) {
            return null
        } else {
            let current = this.head;
            let prev = null;

            while (current.next) {
                prev = current;
                current = current.next;
            }

            if (prev) {
                prev.next = null;
            } else {
                this.head = null
            }
            return current.next;
        }
    }


    removeAt(position) {
        if (position < 0) {
            return null;
        } else {

            let current = this.head;
            if (position == 0) {
                return this.removeFromBeginning();
            }

            let prev = null;
            for (let i = 0; i < position; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            return current.next;
        }
    }


    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const list = new SingleLinkedList();
list.insetAtEnd(4);
list.insetAtEnd(5);
list.insetAtEnd(10);
list.insetAtEnd(2);
list.insetAtEnd(8);
list.insertInBeginning(3);

list.print();

console.log("remove start");
list.removeFromBeginning();
list.print();
console.log("remove from end");
list.removeFromEnd();
list.print();
console.log("postion remove");
list.removeAt(1);
list.print();
