
// Heap Sort is a comparison-based sorting algorithm that works by first building a binary heap from the array and then repeatedly extracting the maximum (for max-heap) or minimum (for min-heap) element from the heap and rebuilding the heap until the entire array is sorted. Heap Sort has a time complexity of O(n log n) and is often implemented using a max-heap.

// Here's how Heap Sort works:

// Build Heap: Build a max-heap from the input array. This involves rearranging the elements in the array so that they satisfy the heap property: for each node 'i' (except the root), arr[parent(i)] ≥ arr[i].

// Heapify: After building the heap, repeatedly remove the maximum element from the heap (which is always the root) and rebuild the heap by heapifying the remaining elements.

// Extract Maximum: Remove the maximum element from the heap and place it at the end of the sorted array. Reduce the size of the heap by one.

// Repeat: Repeat step 3 until the heap is empty.

// code example 


function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }


}


function heapSort(arr) {
    const n = arr.length;
    const startPoint = Math.floor(n / 2);
    for (let i = startPoint - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

const arr = [5, 9, 16, 3, 2, 7, 2, 90, 9, 8, 4];
const result = heapSort(arr);
console.log(result);