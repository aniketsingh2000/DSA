class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

    }

    preAppend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

    }


    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }



    removed(val) {
        let current = this.head;

        while (current) {

            if (current.data === val) {

                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }


                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                return;

            }
            current = current.next;
        }
    }

}

const linked = new DoubleLinkedList();

linked.add("3");
linked.add("5");
linked.add("4");
linked.preAppend("2");

linked.print(); 


console.log("remove start");

linked.removed("5");

linked.print();
