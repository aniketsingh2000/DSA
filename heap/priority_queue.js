class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.data = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.data.push(node);
        this.bubbleUp();
        return this.data
    }

    bubbleUp() {
        let ind = this.data.length - 1;
        let value = this.data[ind];
        while (ind > 0) {
            let parentInd = Math.floor((ind - 1) / 2);
            let parent = this.data[parentInd];

            if (value.priority >= parent.priority) break;
            this.data[ind] = parent;
            this.data[parentInd] = value;
            ind = parentInd;
        }
    }

    dequeue() {
        const min = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let ind = 0;
        let length = this.data.length;
        let element = this.data[0];
        while (true) {
            let leftChildInd = 2 * ind + 1;
            let rightChildInd = 2 * ind + 2;
            let leftChild, rightChild;
            let smallest = null;
            if (leftChildInd < length) {
                leftChild = this.data(leftChildInd);
                if (leftChild.priority < element.priority) {
                    smallest = leftChild;
                }
            }

            if (rightChildInd < length) {
                rightChild = this.data[rightChildInd];
                if ((smallest === null && rightChild.priority < element.priority) || (smallest != null && rightChild.priority < leftChild.priority)) {
                    smallest = rightChild;
                }
            }

            if (smallest === null) {
                break;
            } else {
                this.data[ind] = this.data[smallest];
                this.data[smallest] = element;
                ind = smallest;
            }
        }

    }
}

let priority = new PriorityQueue();
priority.enqueue("Job1", 3);
priority.enqueue("Job2", 4);
priority.enqueue("Job3", 1);
priority.enqueue("Job4", 2);
console.log(priority.enqueue("Job5", 1));