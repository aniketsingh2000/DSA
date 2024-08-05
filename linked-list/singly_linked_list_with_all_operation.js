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
        this.size += 1;
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
            this.size += 1;
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
            this.size += 1;
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
                this.size -= 1;
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
                this.size -= 1;
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


    finduniqueLinkedList() {

        let current = this.head;

        while (current && current.next) {
            if (current.value === current.next.value) {
                current.next = current.next.next
            } else {
                current = current.next;
            }
        }

        return this.head;
    }


    removeDuplicates() {


        let current = this.head;

        let dupCheckObj = {}
        while (current) {
            if (dupCheckObj[current.value]) {
                dupCheckObj[current.value]++;
            } else {
                dupCheckObj[current.value] = 1;
            }
            current = current.next;
        }

        let uniqueElements = []
        current = this.head;
        while (current) {
            if (dupCheckObj[current.value] === 1) {
                uniqueElements.push(current.value);
            }
            current = current.next;
        }

        return uniqueElements;
    }


    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;  // Save the next node
            current.next = prev;  // Reverse the current node's pointer
            prev = current;       // Move prev to current
            current = next;       // Move to the next node
        }

        this.head = prev;  // Update head to the new first node
    }


     checkLoop(head=this.head){
        if(!head || !head.next) return false;
        
        
        let slow = head;
        let fast = head ;
        
        while(fast && fast.next){
          slow = slow.next;
          fast = fast.next.next
          
          console.log(slow,fast)
          if(slow === fast){
           return true;
          }
        
        }
        
        return false;
     }

    printSingleList() {
        console.log(this.tail);
    }
}


let list = new SinglyLinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(4);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);
list.addAtTail(6);
list.print();
console.log('----------');
list.reverse()
list.print();
// console.log(list.finduniqueLinkedList());
// console.log(list.removeDuplicates());
console.log('----------');
// console.log("----print-end------")
// list.addAtIndex(2, 6);
// list.addAtIndex(5, 7);
// list.print();
// console.log("----print-end------")
// const del = list.deleteAtIndex(4);
// console.log("delete value = ", del == -1 ? "Given index not found" : del);
// list.print();
// console.log("----print-end------")
// list.printSingleList();
