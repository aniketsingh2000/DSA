// Bubble Sort:

// Definition:
// Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// How it works:
// Start from the beginning of the list.
// Compare each pair of adjacent elements.
// If they are in the wrong order (i.e., the first element is greater than the second), swap them.
// Move to the next pair of elements and repeat steps 2-3.
// Continue this process until no more swaps are needed (i.e., the list is sorted).

// Performance Characteristics:
// Time Complexity: The worst-case and average-case time complexity of Bubble Sort is O(n^2), where 'n' is the number of elements in the list.
// Space Complexity: Bubble Sort has a space complexity of O(1) because it only requires a constant amount of extra space for temporary variables.
// Stability: Bubble Sort is stable, meaning it preserves the relative order of equal elements.

// Advantages:
// Simplicity: Bubble Sort is easy to understand and implement, making it a good choice for educational purposes or small datasets.
// Space Efficiency: Bubble Sort sorts the elements in place, without requiring additional memory.

// Disadvantages:
// Inefficiency: Bubble Sort is highly inefficient on large datasets, especially compared to more advanced sorting algorithms like Quick Sort or Merge Sort.
// Poor Performance: Its time complexity of O(n^2) makes it impractical for sorting large arrays or lists.
// Lack of Practical Use: Due to its inefficiency, Bubble Sort is rarely used in practice for sorting large datasets. It is mainly used for educational purposes or as a starting point for understanding sorting algorithms.

// Example:
// Consider an array [5, 3, 8, 4, 2]. The steps of Bubble Sort would be:

// Compare 5 and 3, swap since 5 > 3: [3, 5, 8, 4, 2].
// Compare 5 and 8, no swap: [3, 5, 8, 4, 2].
// Compare 8 and 4, swap since 8 > 4: [3, 5, 4, 8, 2].
// Compare 8 and 2, swap since 8 > 2: [3, 5, 4, 2, 8].
// Repeat the above steps until the array is sorted.
// Bubble Sort is a fundamental sorting algorithm, but due to its inefficiency, it's not suitable for large datasets. 


// code example




// function bubbleSort(arr) {
//     const length = arr.length - 1;


//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }


// const arr = [5,9,16,3,2,7,4];
// const sortedArr =  bubbleSort(arr);
// console.log(arr);


function swap(array, i) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
  
  function bubbleSort(array) {
    let sorted = false;
    let counter = 0;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          swap(array, i);
          sorted = false
        }
      }
      counter++;
    }
    return array
  }
  
  let arr = [5, 2, 20, 14, 7, 9, 12];
  console.log(bubbleSort(arr));
  