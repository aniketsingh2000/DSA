// A doubly linked list is a type of linked list where each node contains two pointers: one pointing to the next node and another pointing to the previous node. This structure allows traversal in both forward and backward directions.

// Structure of a Doubly Linked List:

// Each node contains three fields: data, a pointer to the next node (next), and a pointer to the previous node (prev).
// The first node's prev pointer and the last node's next pointer point to null.

// Usage:
// Doubly linked lists are used when you need to efficiently traverse a list in both forward and backward directions.
// They are often used in scenarios where elements need to be inserted or removed frequently at both ends or at arbitrary positions within the list.
// Doubly linked lists are used in implementing various data structures like queues, deques, and memory allocators.

// Advantages:
// Bidirectional Traversal: Doubly linked lists allow traversal in both forward and backward directions, making operations like searching, insertion, and deletion more flexible.
// Efficient Insertion and Deletion: Insertion and deletion operations at both ends of the list are efficient, as they require updating pointers to neighboring nodes.
// Dynamic Size: Doubly linked lists can dynamically grow or shrink in size during program execution.

// Disadvantages:
// Extra Memory Overhead: Doubly linked lists require more memory compared to singly linked lists due to the additional pointers for the previous nodes.
// Complexity: Managing pointers to both the next and previous nodes adds complexity to implementation and maintenance.

// Real-life Example:
// Consider a browser's history feature as a real-life example of a doubly linked list. Each webpage visited can be represented as a node in the doubly linked list, with pointers to the previously visited page (prev) and the next visited page (next). 
// Advantages of using a doubly linked list for browser history include the ability to navigate backward and forward through visited pages efficiently, as well as the dynamic nature of the history list, allowing users to add or remove pages dynamically.

// code example



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    insertAtBeginning(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }


    insertAtEnd(data) {
        let node = new Node(data);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }


    removeFromBeginning(){
      if(!this.head){
        return null;
      }
      let removeNode = this.head;
      if(this.head === this.tail){
         this.head = null;
         this.tail = null;
      }else {
        this.head = this.head.next;
        this.head.prev = null;
      }
       return removeNode.data;
    }


    removeFromEnd(){
        if(!this.tail){
           return null;
        }

        let removeNode = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
         }else {
           this.tail = this.tail.prev;
           this.tail.next = null;
         }
          return removeNode.data;
    }

    printForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    printBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev
        }
    }


}


let list = new DoublyLinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(19);
list.insertAtEnd(15);
list.insertAtEnd(6);
list.insertAtBeginning(0);
list.printForward(); // Output: 0 1 2
console.log("print bacward");
list.printBackward(); // Output: 2 1 0
list.removeFromBeginning();
list.removeFromEnd();
console.log("after remove forward print")
list.printForward(); // Output: 1

