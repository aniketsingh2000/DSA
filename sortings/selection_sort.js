// Selection Sort:
// Definition:
// Selection Sort is a simple comparison-based sorting algorithm. It divides the input list into two parts: a sorted sublist and an unsorted sublist. Initially, the sorted sublist is empty, and the unsorted sublist contains all the elements. The algorithm repeatedly finds the smallest (or largest, depending on sorting order) element from the unsorted sublist and swaps it with the leftmost unsorted element. After each iteration, the sorted sublist grows, and the unsorted sublist shrinks until it becomes empty.

// How it works:
// Divide the input list into two sublists: a sorted sublist and an unsorted sublist.
// Find the smallest element in the unsorted sublist.
// Swap the smallest element with the leftmost unsorted element, moving it into the sorted sublist.
// Repeat steps 2 and 3 until the unsorted sublist becomes empty.

// Performance Characteristics:
// Time Complexity: The time complexity of Selection Sort is O(n^2) in all cases, where 'n' is the number of elements in the list.
// Space Complexity: Selection Sort has a space complexity of O(1) because it only requires a constant amount of extra space for temporary variables.
// Stability: Selection Sort is not stable because it does not preserve the relative order of equal elements.

// Advantages:
// Simplicity: Selection Sort is easy to understand and implement, making it suitable for educational purposes or small datasets.
// Space Efficiency: Selection Sort sorts the elements in place, without requiring additional memory.

// Disadvantages:
// Inefficiency: Selection Sort is highly inefficient on large datasets, especially compared to more advanced sorting algorithms like Quick Sort or Merge Sort.
// Fixed Comparisons: Selection Sort performs a fixed number of comparisons for each element, even if the list is already sorted.
// Lack of Practical Use: Due to its inefficiency, Selection Sort is rarely used in practice for sorting large datasets.

// Example:
// Consider an array [5, 3, 8, 4, 2]. The steps of Selection Sort would be:

// Find the smallest element (2) and swap it with the first element: [2, 3, 8, 4, 5].
// Find the smallest element (3) in the remaining sublist and swap it with the second element: [2, 3, 8, 4, 5].
// Continue this process until the entire array is sorted.

// code example

function selectionSort(arr){
    const n = arr.length;

    for(let i = 0; i < n -1; i++){
      let minIndex = i;
      for(let j= i+1; j < n; j++ ){
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
      }

      if(minIndex != i){
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }

    }

    return arr;
}


const arr = [5,9,16,3,2,7,2,90,9,8,4];
const result = selectionSort(arr);
console.log(result);