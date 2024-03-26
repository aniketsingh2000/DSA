
// Certainly! Let's discuss Insertion Sort.

// Insertion Sort:
// Definition:
// Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array (or list) one element at a time. It iterates through the input list and removes one element at a time, finding its correct position in the sorted part of the array and inserting it there. The algorithm efficiently builds the sorted portion of the list by repeatedly moving larger elements one position to the right until it finds the correct position for the current element.

// How it works:
// Start with the second element (index 1) and assume it is the beginning of the sorted part of the array.
// Iterate through the unsorted part of the array, comparing each element with the elements in the sorted part.
// Insert the current element into its correct position in the sorted part of the array by shifting larger elements one position to the right.
// Repeat steps 2-3 until the entire array is sorted.

// Performance Characteristics:
// Time Complexity: The time complexity of Insertion Sort is O(n^2) in the worst-case scenario, where 'n' is the number of elements in the list.
// Space Complexity: Insertion Sort has a space complexity of O(1) because it only requires a constant amount of extra space for temporary variables.
// Stability: Insertion Sort is stable because it preserves the relative order of equal elements.

// Advantages:
// Efficiency on Small Data: Insertion Sort is efficient for small datasets or partially sorted arrays.
// Adaptive: It performs well when the input array is almost sorted, with a time complexity closer to O(n) in such cases.

// Disadvantages:
// Inefficiency on Large Data: Insertion Sort is inefficient on large datasets, especially compared to more advanced sorting algorithms like Quick Sort or Merge Sort.
// Fixed Comparisons: Insertion Sort performs a fixed number of comparisons for each element, even if the list is already sorted.

// Example:
// Consider an array [5, 3, 8, 4, 2]. The steps of Insertion Sort would be:

// Start with the second element (3) and compare it with the first element (5). Since 3 < 5, insert 3 before 5: [3, 5, 8, 4, 2].
// Move to the third element (8) and insert it into its correct position: [3, 5, 8, 4, 2].
// Continue this process until the entire array is sorted.

// code example


function insertionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--
        }

        arr[j + 1] = currentElement;
    }
    return arr;
}


const arr = [4, 5, 1, 20, 14, 8, 6, 12,14, 17, 9];
const result = insertionSort(arr);
console.log(result)