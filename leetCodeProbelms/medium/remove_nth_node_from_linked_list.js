class Node {
    constructor(val){
     this.data = val;
     this.next = null;
    }
}



class LinkedList{

    constructor(){
        this.head = null;
        this.position = 0;
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
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.position++;
    }



    removeFromlast(removePosFromLast){

        if(removePosFromLast > this.position ){
            return "position not found";
        }

        let current = this.head;
        let previous = null;
        let count = this.position;

        while (current && count > removePosFromLast) {
            previous = current;
            current = current.next;
            count--;
        }

        if (current) {
            previous.next = current.next;
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

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

const list = new LinkedList();
list.insetAtEnd(1);
list.insetAtEnd(2);
// list.insetAtEnd(3);
// list.insetAtEnd(4);
// list.insetAtEnd(5);
list.print();

console.log("------------")
list.removeFromlast(1);
list.print();

// console.log("remove start");
// list.removeFromBeginning();
// list.print();
// console.log("remove from end");
// list.removeFromEnd();
// list.print();
// console.log("postion remove");
// list.removeAt(1);
// list.print();
