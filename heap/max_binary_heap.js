class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(array) {
        let length = array.length;
        let lastParent = Math.floor(length / 2) - 1;
        for (let i = lastParent; i >= 0; i--) {
            array = this.bubbleDown(array, i);
        }
        console.log(array);
        this.heap = array;
        return this.heap;
    }


    bubbleDown(array, ind) {
        const length = array.length;
        const current = array[ind];

        while (true) {
            let leftChildInd = 2 * ind + 1;
            let rightChildInd = 2 * ind + 2;
            let leftChild, rightChild;
            let largest = null;

            if (leftChildInd < length) {
                leftChild = array[leftChildInd];
                if (leftChild > current) {
                    largest = leftChildInd;
                }
            }

            if (rightChildInd < length) {
                rightChild = array[rightChildInd];
                if ((largest === null && rightChild > current) || (largest !== null && rightChild > leftChild)) {
                    largest = rightChildInd;
                }
            }
            if (largest === null) {
                break;
            } else {
                array[ind] = array[largest];
                array[largest] = current;
                ind = largest
            }
        }
        return array;
    }


    extractMax(){
        const maximumValue = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = last;
            this.heap = this.bubbleDown(this.heap, 0);
        }
        return maximumValue;    

    }


    insert(value){
        this.heap.push(value);
        this.bubbleUp();
        return this;
    }

    bubbleUp(){
        let ind = this.heap.length-1;
        const value = this.heap[ind];
        while(ind > 0) {
            const parentInd = Math.floor((ind-1)/2);
            const parentValue = this.heap[parentInd];
            if(value <= parentValue) break;
            this.heap[parentInd] = value;
            this.heap[ind] = parentValue;
            ind = parentInd;
        }
    }

    peak(){
        return this.heap[0];
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.buildHeap([4, 7, 3, 0, 9, 3, 2, 6]));

// console.log(heap.extractMax())
// console.log(heap.extractMax());

console.log(heap.insert(20));
console.log(heap.peak())
console.log(heap.peak())
console.log(heap.peak())
