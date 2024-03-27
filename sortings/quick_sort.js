// Quick Sort:
// Definition:
// Quick Sort is a comparison-based sorting algorithm that follows the Divide and Conquer strategy. It selects a pivot element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.

// How it works:
// Choose Pivot: Select a pivot element from the array.
// Partitioning: Rearrange the elements in the array so that all elements less than the pivot are moved to its left, and all elements greater than the pivot are moved to its right. The pivot is now in its final sorted position.
// Recursion: Recursively apply the above steps to the sub-arrays on the left and right of the pivot until the entire array is sorted.

// Performance Characteristics:
// Time Complexity: The time complexity of Quick Sort is O(n log n) on average and O(n^2) in the worst-case scenario, but with good pivot selection strategies, the worst-case can be avoided.
// Space Complexity: Quick Sort has a space complexity of O(log n) for the recursive call stack.
// Stability: Quick Sort is not stable because it may change the relative order of equal elements.

// Advantages:
// Efficiency: Quick Sort is highly efficient, especially for large datasets, due to its average-case time complexity of O(n log n).
// In-Place Sorting: Quick Sort typically performs sorting in-place, requiring only a small amount of additional memory.
// Adaptability: Quick Sort can be adapted to efficiently handle partially sorted arrays.

// Disadvantages:
// Worst-case Performance: Quick Sort may exhibit O(n^2) time complexity in the worst-case scenario if the pivot selection is poor.
// Unstable: Quick Sort is not stable because it may change the relative order of equal elements.
// Pivot Sensitivity: The performance of Quick Sort can be sensitive to the choice of pivot, leading to variations in efficiency.

// Example:
// Consider an array [38, 27, 43, 3, 9, 82, 10]. The steps of Quick Sort would involve selecting a pivot (e.g., 38), partitioning the array into elements less than or greater than the pivot, and recursively sorting the sub-arrays until the entire array is sorted.

// Quick Sort is widely used in practice due to its efficiency and adaptability, especially for sorting large datasets efficiently.


// Code Example


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

}

const arr = [5,9,16,3,2,7,2,90,9,8,4];
const result = quickSort(arr);
console.log(result);